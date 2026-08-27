<script setup>
import { ref, computed, onMounted } from 'vue'
import { fetchWeatherList } from '../services/weatherService'
import { isHot } from '../models/weatherRules'
import ProgressSpinner from 'primevue/progressspinner'

const weatherList = ref([])
const isLoading = ref(true)

onMounted(async () => {
  weatherList.value = await fetchWeatherList()
  isLoading.value = false
})

const hotCount = computed(() => weatherList.value.filter(isHot).length)
const coolCount = computed(() => weatherList.value.length - hotCount.value)
const averageTemp = computed(() => {
  if (weatherList.value.length === 0) return 0
  const sum = weatherList.value.reduce((acc, city) => acc + city.temp, 0)
  return Math.round((sum / weatherList.value.length) * 10) / 10
})
</script>

<template>
  <div>
    <h2 class="section-heading" style="margin-top: 32px">📊 전체 도시 날씨 통계</h2>

    <div v-if="isLoading" class="flex justify-content-center my-6">
      <ProgressSpinner />
    </div>
    <div v-else class="stat-grid">
      <div class="stat-tile">
        <div class="stat-label">등록된 도시 수</div>
        <div class="stat-value">{{ weatherList.length }}개</div>
      </div>
      <div class="stat-tile">
        <div class="stat-label">평균 기온</div>
        <div class="stat-value">{{ averageTemp }}°C</div>
      </div>
      <div class="stat-tile">
        <div class="stat-label">🔥 더움 (25도 이상)</div>
        <div class="stat-value">{{ hotCount }}개</div>
      </div>
      <div class="stat-tile">
        <div class="stat-label">❄ 선선함 (25도 미만)</div>
        <div class="stat-value">{{ coolCount }}개</div>
      </div>
    </div>
  </div>
</template>
