<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchWeatherDetail, fetchWeatherForecast } from '../services/weatherService'
import { useConfigStore } from '../../stores/configStore'
import ProgressSpinner from 'primevue/progressspinner'

const props = defineProps({
  cityId: { type: String, required: true },
})

const router = useRouter()
const configStore = useConfigStore()
const detail = ref(null)
const forecast = ref([])
const isLoading = ref(true)
const loadError = ref(null)

onMounted(async () => {
  try {
    detail.value = await fetchWeatherDetail(props.cityId)
    forecast.value = await fetchWeatherForecast(props.cityId)
  } catch (err) {
    loadError.value = '날씨 정보를 불러오지 못했습니다.'
  } finally {
    isLoading.value = false
  }
})

const displayTemp = computed(() => {
  if (!detail.value) return null
  const rawTemp = detail.value.temp
  if (configStore.unit === 'fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32)
  }
  return rawTemp
})

function goBackToDashboard() {
  router.push('/')
}
</script>

<template>
  <div>
    <h2 class="section-heading" style="margin-top: 32px">📍 지역별 상세 기상관측 정보</h2>

    <div v-if="isLoading" class="flex justify-content-center my-6">
      <ProgressSpinner />
    </div>
    <p v-else-if="loadError" style="color: #eb4c3f">{{ loadError }}</p>

    <template v-else-if="detail">
      <p style="color: var(--toss-text-secondary); font-weight: 600; margin-bottom: 4px">
        {{ detail.region }}
      </p>

      <div class="stat-grid">
        <div class="stat-tile">
          <div class="stat-label">기온</div>
          <div class="stat-value">{{ displayTemp }}{{ configStore.unitSymbol }}</div>
        </div>
        <div class="stat-tile">
          <div class="stat-label">대기 습도</div>
          <div class="stat-value">{{ detail.humidity }}%</div>
        </div>
        <div class="stat-tile">
          <div class="stat-label">현재 풍속</div>
          <div class="stat-value">{{ detail.windSpeed }}m/s</div>
        </div>
      </div>

      <template v-if="forecast.length">
        <h2 class="section-heading">🕒 다음 예보 (3시간 단위)</h2>
        <div class="stat-grid">
          <div v-for="item in forecast" :key="item.time" class="stat-tile">
            <div class="stat-label">{{ item.time.slice(5, 16) }}</div>
            <div class="stat-value" style="font-size: 1.3rem">{{ item.temp }}°C</div>
            <div style="color: var(--toss-text-secondary); font-size: 0.85rem; margin-top: 4px">
              {{ item.status }}
            </div>
          </div>
        </div>
      </template>
    </template>

    <p v-else style="color: var(--toss-text-secondary)">
      해당 도시({{ cityId }})의 관측 정보를 찾을 수 없습니다.
    </p>

    <button
      class="pill-button-primary"
      style="width: auto; padding: 12px 24px; margin-top: 28px"
      @click="goBackToDashboard"
    >
      ← 메인 대시보드로 돌아가기
    </button>
  </div>
</template>
