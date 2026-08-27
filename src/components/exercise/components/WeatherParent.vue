<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
import { fetchWeatherList } from '../models/weatherRepository'
import { matchesSearch } from '../models/weatherRules'
import BaseDashboardCard from './BaseDashboardCard.vue'
import SearchBar from './SearchBar.vue'
import WeatherCard from './WeatherCard.vue'
import StatusBanner from './StatusBanner.vue'

const weatherList = ref(fetchWeatherList())
const searchQuery = ref('')
const selectedCityInfo = ref('카드를 클릭하거나 검색해 보세요.')
const clickCount = ref(0)

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

function handleClickDetail({ name, status }) {
  window.alert(`${name}의 현재 날씨는 [${status}] 상태입니다.`)
}
</script>

<template>
  <div class="weather-app">
    <h2>🌤 날씨 Component</h2>

    <StatusBanner
      :message="selectedCityInfo"
      :click-count="clickCount"
      :average-temp="averageTemp"
    />

    <BaseDashboardCard title="🔍 도시 검색 (한글 즉시 동기화)">
      <!-- SearchBar는 시각적으로 BaseDashboardCard 안에 있지만,
           slot 내용은 부모(WeatherParent) 스코프에서 컴파일되므로
           searchQuery/handleUpdateQuery를 여기서 직접 바인딩할 수 있음 -->
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
      <p v-if="filteredWeatherList.length === 0" class="empty">
        검색 결과와 일치하는 도시가 없습니다.
      </p>
    </BaseDashboardCard>
  </div>
</template>

<style scoped>
.weather-app {
  max-width: 420px;
  margin: 0 auto;
  font-family: sans-serif;
}
.empty {
  text-align: center;
  color: #888;
}
</style>
