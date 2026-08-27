<script setup>
import { ref, computed, watchEffect, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchWeatherList } from '../services/weatherService'
import { matchesSearch } from '../models/weatherRules'
import { useConfigStore } from '../../stores/configStore'
import BaseDashboardCard from '../components/BaseDashboardCard.vue'
import SearchBar from '../components/SearchBar.vue'
import WeatherCard from '../components/WeatherCard.vue'
import StatusBanner from '../components/StatusBanner.vue'
import UnitToggler from '../components/UnitToggler.vue'
import ProgressSpinner from 'primevue/progressspinner'
import Message from 'primevue/message'

const router = useRouter()
const configStore = useConfigStore()

const weatherList = ref([])
const isLoading = ref(true)
const loadError = ref(null)
const searchQuery = ref('')

onMounted(async () => {
  try {
    weatherList.value = await fetchWeatherList()
  } catch (err) {
    loadError.value = '날씨 데이터를 불러오지 못했습니다.'
  } finally {
    isLoading.value = false
  }
})

const filteredWeatherList = computed(() =>
  weatherList.value.filter((city) => matchesSearch(city, searchQuery.value)),
)

const favoriteWeatherList = computed(() =>
  weatherList.value.filter((city) => configStore.isFavorite(city.id)),
)

const averageTemp = computed(() => {
  if (filteredWeatherList.value.length === 0) return 0
  const sum = filteredWeatherList.value.reduce((acc, city) => acc + city.temp, 0)
  return Math.round((sum / filteredWeatherList.value.length) * 10) / 10
})

watchEffect(() => {
  console.log(
    `[watchEffect 자동 호출] 현재 검색어 '${searchQuery.value}'에 매칭되는 데이터를 필터링`,
  )
})

function handleUpdateQuery(value) {
  searchQuery.value = value
}

function handleClickDetail({ id }) {
  router.push('/weather/' + id)
}
</script>

<template>
  <div>
    <div class="hero-banner">
      <div class="hero-emoji">🌤️</div>
      <div class="hero-title">
        궁금한 지역 날씨,<br />
        <span class="hero-highlight">한 번에</span> 검색해보세요
      </div>
      <div class="hero-sub">한글로 도시 이름만 입력하면 바로 찾아드려요</div>
      <SearchBar :search-query="searchQuery" @update-query="handleUpdateQuery" />
    </div>

    <StatusBanner :favorite-count="configStore.favoriteCount" :average-temp="averageTemp" />

    <div v-if="isLoading" class="flex justify-content-center my-6">
      <ProgressSpinner />
    </div>
    <Message v-else-if="loadError" severity="error" :closable="false" class="mb-4">{{
      loadError
    }}</Message>

    <template v-else>
      <BaseDashboardCard title="⭐ 즐겨찾기한 지역">
        <template v-if="favoriteWeatherList.length > 0">
          <WeatherCard
            v-for="city in favoriteWeatherList"
            :key="city.id"
            :city="city"
            @click-detail="handleClickDetail"
          />
        </template>
        <Message v-else severity="info" :closable="false" class="grid-full">
          아직 즐겨찾기한 지역이 없어요. 카드의 ☆ 버튼을 눌러 추가해보세요.
        </Message>
      </BaseDashboardCard>

      <BaseDashboardCard title="📋 지역별 날씨 현황">
        <WeatherCard
          v-for="city in filteredWeatherList"
          :key="city.id"
          :city="city"
          @click-detail="handleClickDetail"
        />
        <Message
          v-if="filteredWeatherList.length === 0"
          severity="info"
          :closable="false"
          class="grid-full"
        >
          검색 결과와 일치하는 도시가 없습니다.
        </Message>
      </BaseDashboardCard>
    </template>
  </div>
</template>
