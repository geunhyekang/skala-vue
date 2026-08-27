<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchWeatherDetail, fetchWeatherForecast } from '../services/weatherService'
import { useConfigStore } from '../../stores/configStore'

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
  <div class="weather-detail">
    <h3>📍 지역별 상세 기상관측 정보</h3>

    <p v-if="isLoading">불러오는 중...</p>
    <p v-else-if="loadError" class="empty">{{ loadError }}</p>

    <template v-else-if="detail">
      <div class="detail-card">
        <p>관측 지점: {{ detail.region }}</p>
        <p>기상 기온: {{ displayTemp }}{{ configStore.unitSymbol }}</p>
        <p>대기 습도: {{ detail.humidity }}%</p>
        <p>현재 풍속: {{ detail.windSpeed }}m/s</p>
      </div>

      <div v-if="forecast.length" class="forecast-list">
        <h4>🕒 다음 예보 (3시간 단위)</h4>
        <ul>
          <li v-for="item in forecast" :key="item.time">
            {{ item.time.slice(5, 16) }} · {{ item.temp }}°C · {{ item.status }}
          </li>
        </ul>
      </div>
    </template>

    <p v-else class="empty">해당 도시({{ cityId }})의 관측 정보를 찾을 수 없습니다.</p>

    <button class="back-button" @click="goBackToDashboard">← 메인 대시보드로 돌아가기</button>
  </div>
</template>

<style scoped>
.weather-detail {
  text-align: center;
}
.detail-card {
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 16px;
  margin: 16px 0;
  text-align: left;
}
.detail-card p {
  margin: 6px 0;
}
.forecast-list {
  text-align: left;
  margin-bottom: 16px;
}
.forecast-list ul {
  padding-left: 18px;
  line-height: 1.6;
}
.back-button {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: #3550d4;
  color: #fff;
  cursor: pointer;
}
.empty {
  color: #888;
  margin: 20px 0;
}
</style>
