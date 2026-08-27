<script setup>
import { ref, computed, onMounted } from 'vue'
import { fetchWeatherList } from '../services/weatherService'
import { isHot } from '../models/weatherRules'

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
  <v-card variant="outlined">
    <v-card-title>📊 전체 도시 날씨 통계</v-card-title>
    <div v-if="isLoading" class="d-flex justify-center my-6">
      <v-progress-circular indeterminate color="primary" />
    </div>
    <v-list v-else>
      <v-list-item>등록된 도시 수: {{ weatherList.length }}개</v-list-item>
      <v-list-item>평균 기온: {{ averageTemp }}°C</v-list-item>
      <v-list-item>🔥 더움(25도 이상): {{ hotCount }}개</v-list-item>
      <v-list-item>❄ 선선함(25도 미만): {{ coolCount }}개</v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped>
.stats-view ul {
  padding-left: 20px;
  line-height: 1.8;
}
</style>
