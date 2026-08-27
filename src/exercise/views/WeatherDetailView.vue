<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchWeatherDetail } from '../services/weatherService'

const props = defineProps({
  cityId: { type: String, required: true },
})

const router = useRouter()
const detail = ref(null)
const isLoading = ref(true)

onMounted(async () => {
  detail.value = await fetchWeatherDetail(props.cityId)
  isLoading.value = false
})

function goBackToDashboard() {
  router.push('/')
}
</script>

<template>
  <div class="weather-detail">
    <h3>📍 지역별 상세 기상관측 정보</h3>

    <p v-if="isLoading">불러오는 중...</p>
    <div v-else-if="detail" class="detail-card">
      <p>관측 지점: {{ detail.region }}</p>
      <p>기상 기온: {{ detail.temp }}°C</p>
      <p>대기 습도: {{ detail.humidity }}%</p>
      <p>현재 풍속: {{ detail.windSpeed }}m/s</p>
    </div>
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
