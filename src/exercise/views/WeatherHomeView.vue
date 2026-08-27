<script setup>
import { ref, computed, watchEffect, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchWeatherList, searchCityWeather } from '../services/weatherService'
import { matchesSearch } from '../models/weatherRules'
import { useConfigStore } from '../../stores/configStore'
import { useCityStore } from '../../stores/cityStore'
import BaseDashboardCard from '../components/BaseDashboardCard.vue'
import SearchBar from '../components/SearchBar.vue'
import WeatherCard from '../components/WeatherCard.vue'
import StatusBanner from '../components/StatusBanner.vue'
import ProgressSpinner from 'primevue/progressspinner'
import Message from 'primevue/message'

const router = useRouter()
const configStore = useConfigStore()
const cityStore = useCityStore()

const weatherList = ref([])
const isLoading = ref(true)
const loadError = ref(null)
const searchQuery = ref('')
const isAdding = ref(false)
const addError = ref(null)

onMounted(async () => {
  try {
    weatherList.value = await fetchWeatherList(cityStore.cities)
  } catch {
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
  addError.value = null
}

function handleClickDetail({ id }) {
  router.push('/weather/' + id)
}

async function handleAddCity() {
  const query = searchQuery.value.trim()
  if (!query) return

  isAdding.value = true
  addError.value = null
  try {
    const result = await searchCityWeather(query)
    const cityId = cityStore.addCity(result.name, result.query)
    weatherList.value.push({
      id: cityId,
      name: result.name,
      temp: result.temp,
      status: result.status,
      humidity: result.humidity,
    })
    searchQuery.value = ''
  } catch {
    addError.value = `'${query}' 지역을 찾을 수 없어요. 영문 도시명으로 검색해보세요. (예: Tokyo)`
  } finally {
    isAdding.value = false
  }
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
      <div class="hero-sub">등록된 도시를 검색하거나, 영문 도시명으로 새 지역을 추가해보세요</div>
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
        <div
          v-if="filteredWeatherList.length === 0 && searchQuery.trim()"
          class="add-city-prompt grid-full"
        >
          <p>'{{ searchQuery }}' 지역이 목록에 없어요.</p>
          <p style="color: var(--toss-text-secondary); font-size: 0.82rem; margin-top: 4px">
            새 지역은 영문 도시명으로 검색해야 정확히 추가돼요. (예: Tokyo, Paris)
          </p>
          <button
            class="pill-button-primary"
            style="width: auto; padding: 10px 20px; margin-top: 8px"
            :disabled="isAdding"
            @click="handleAddCity"
          >
            {{ isAdding ? '검색 중...' : `${searchQuery} 추가하기` }}
          </button>
          <p v-if="addError" style="color: #eb4c3f; font-size: 0.85rem; margin-top: 8px">
            {{ addError }}
          </p>
        </div>
      </BaseDashboardCard>
    </template>
  </div>
</template>
