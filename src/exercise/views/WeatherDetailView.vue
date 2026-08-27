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
  <div>
    <h3 class="text-h6 mb-3">📍 지역별 상세 기상관측 정보</h3>

    <div v-if="isLoading" class="d-flex justify-center my-6">
      <v-progress-circular indeterminate color="primary" />
    </div>
    <v-alert v-else-if="loadError" type="error">{{ loadError }}</v-alert>

    <template v-else-if="detail">
      <v-card class="mb-4" variant="outlined">
        <v-card-text>
          <p>관측 지점: {{ detail.region }}</p>
          <p>기상 기온: {{ displayTemp }}{{ configStore.unitSymbol }}</p>
          <p>대기 습도: {{ detail.humidity }}%</p>
          <p>현재 풍속: {{ detail.windSpeed }}m/s</p>
        </v-card-text>
      </v-card>

      <v-card v-if="forecast.length" class="mb-4" variant="outlined">
        <v-card-title>🕒 다음 예보 (3시간 단위)</v-card-title>
        <v-list density="compact">
          <v-list-item v-for="item in forecast" :key="item.time">
            {{ item.time.slice(5, 16) }} · {{ item.temp }}°C · {{ item.status }}
          </v-list-item>
        </v-list>
      </v-card>
    </template>

    <v-alert v-else type="warning">해당 도시({{ cityId }})의 관측 정보를 찾을 수 없습니다.</v-alert>

    <v-btn color="primary" class="mt-2" @click="goBackToDashboard"
      >← 메인 대시보드로 돌아가기</v-btn
    >
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
