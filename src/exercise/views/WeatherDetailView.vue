<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchWeatherDetail, fetchWeatherForecast } from '../services/weatherService'
import { fetchAirQuality } from '../services/airQualityApi'
import { convertTemp, classifyAirQuality } from '../models/weatherRules'
import { useConfigStore } from '../../stores/configStore'
import { useCityStore } from '../../stores/cityStore'
import ProgressSpinner from 'primevue/progressspinner'

const props = defineProps({
  cityId: { type: String, required: true },
})

const router = useRouter()
const configStore = useConfigStore()
const cityStore = useCityStore()
const detail = ref(null)
const forecast = ref([])
const airQuality = ref(null)
const isLoading = ref(true)
const loadError = ref(null)

onMounted(async () => {
  const city = cityStore.findById(props.cityId)
  if (!city) {
    isLoading.value = false
    return
  }
  try {
    detail.value = await fetchWeatherDetail(city)
    forecast.value = await fetchWeatherForecast(city)
  } catch {
    loadError.value = '날씨 정보를 불러오지 못했습니다.'
    isLoading.value = false
    return
  }

  try {
    airQuality.value = await fetchAirQuality(detail.value.lat, detail.value.lon)
  } catch {
    airQuality.value = null
  } finally {
    isLoading.value = false
  }
})

const displayTemp = computed(() =>
  detail.value ? convertTemp(detail.value.temp, configStore.unit) : null,
)
const displayFeelsLike = computed(() =>
  detail.value ? convertTemp(detail.value.feelsLike, configStore.unit) : null,
)
const displayTempMax = computed(() =>
  detail.value ? convertTemp(detail.value.tempMax, configStore.unit) : null,
)
const displayTempMin = computed(() =>
  detail.value ? convertTemp(detail.value.tempMin, configStore.unit) : null,
)

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
          <div class="stat-label">체감온도</div>
          <div class="stat-value">{{ displayFeelsLike }}{{ configStore.unitSymbol }}</div>
        </div>
        <div class="stat-tile">
          <div class="stat-label">최고 / 최저</div>
          <div class="stat-value">{{ displayTempMax }}° / {{ displayTempMin }}°</div>
        </div>
        <div class="stat-tile">
          <div class="stat-label">대기 습도</div>
          <div class="stat-value">{{ detail.humidity }}%</div>
        </div>
        <div class="stat-tile">
          <div class="stat-label">현재 풍속</div>
          <div class="stat-value">{{ detail.windSpeed }}m/s</div>
        </div>
        <div class="stat-tile">
          <div class="stat-label">일출 · 일몰</div>
          <div class="stat-value" style="font-size: 1.3rem">
            {{ detail.sunrise }} · {{ detail.sunset }}
          </div>
        </div>
        <div v-if="airQuality" class="stat-tile">
          <div class="stat-label">대기질</div>
          <div class="stat-value" style="font-size: 1.3rem">
            {{ classifyAirQuality(airQuality.usAqi) }}
          </div>
          <div style="color: var(--toss-text-secondary); font-size: 0.85rem; margin-top: 4px">
            PM10 {{ airQuality.pm10 }} · PM2.5 {{ airQuality.pm25 }}
          </div>
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
