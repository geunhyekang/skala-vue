<script setup>
import { ref, computed, watch, watchEffect, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchWeatherList } from '../services/weatherService'
import { matchesSearch } from '../models/weatherRules'
import BaseDashboardCard from '../components/BaseDashboardCard.vue'
import SearchBar from '../components/SearchBar.vue'
import WeatherCard from '../components/WeatherCard.vue'
import StatusBanner from '../components/StatusBanner.vue'

import ProgressSpinner from 'primevue/progressspinner'
import Message from 'primevue/message'

const router = useRouter()

const weatherList = ref([])
const isLoading = ref(true)
const loadError = ref(null)
const searchQuery = ref('')
const selectedCityInfo = ref('카드를 클릭하거나 검색해 보세요.')
const clickCount = ref(0)

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

const averageTemp = computed(() => {
  if (filteredWeatherList.value.length === 0) return 0
  const sum = filteredWeatherList.value.reduce((acc, city) => acc + city.temp, 0)
  return Math.round((sum / filteredWeatherList.value.length) * 10) / 10
})

watch(selectedCityInfo, (newValue) => {
  console.log(`[watch 감지] 상태 바 문구가 업데이트되었습니다 -> "${newValue}"`)
})

watchEffect(() => {
  console.log(
    `[watchEffect 자동 호출] 현재 검색어 '${searchQuery.value}'에 매칭되는 데이터를 필터링`,
  )
})

function handleUpdateQuery(value) {
  searchQuery.value = value
}

function handleSelectCard(cityName) {
  selectedCityInfo.value = `${cityName}이 선택되었습니다.`
  clickCount.value += 1
}

function handleClickDetail({ id }) {
  router.push('/weather/' + id)
}
</script>

<template>
  <div>
    <StatusBanner
      :message="selectedCityInfo"
      :click-count="clickCount"
      :average-temp="averageTemp"
    />

    <div v-if="isLoading" class="flex justify-content-center my-6">
      <ProgressSpinner />
    </div>
    <Message v-else-if="loadError" severity="error" :closable="false" class="mb-4">{{
      loadError
    }}</Message>

    <template v-else>
      <BaseDashboardCard title="🔍 도시 검색 (한글 즉시 동기화)">
        <SearchBar :search-query="searchQuery" @update-query="handleUpdateQuery" />
      </BaseDashboardCard>

      <BaseDashboardCard title="📋 지역별 날씨 현황">
        <WeatherCard
          v-for="city in filteredWeatherList"
          :key="city.id"
          :city="city"
          @select-card="handleSelectCard"
          @click-detail="handleClickDetail"
        />
        <Message v-if="filteredWeatherList.length === 0" severity="info" :closable="false">
          검색 결과와 일치하는 도시가 없습니다.
        </Message>
      </BaseDashboardCard>
    </template>
  </div>
</template>

<style scoped>
.empty {
  text-align: center;
  color: #888;
}
.error {
  text-align: center;
  color: #c0392b;
}
</style>
