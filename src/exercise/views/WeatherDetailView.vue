<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchWeatherDetail, fetchWeatherForecast } from '../services/weatherService'
import { useConfigStore } from '../../stores/configStore'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Message from 'primevue/message'
import ProgressSpinner from 'primevue/progressspinner'
import Timeline from 'primevue/timeline'

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
    <h3>📍 지역별 상세 기상관측 정보</h3>

    <div v-if="isLoading" class="flex justify-content-center my-6">
      <ProgressSpinner />
    </div>
    <Message v-else-if="loadError" severity="error" :closable="false">{{ loadError }}</Message>

    <template v-else-if="detail">
      <Card class="mb-4">
        <template #content>
          <p>관측 지점: {{ detail.region }}</p>
          <p>기상 기온: {{ displayTemp }}{{ configStore.unitSymbol }}</p>
          <p>대기 습도: {{ detail.humidity }}%</p>
          <p>현재 풍속: {{ detail.windSpeed }}m/s</p>
        </template>
      </Card>

      <Card v-if="forecast.length" class="mb-4">
        <template #title>🕒 다음 예보 (3시간 단위)</template>
        <template #content>
          <Timeline :value="forecast">
            <template #content="slotProps">
              {{ slotProps.item.time.slice(5, 16) }} · {{ slotProps.item.temp }}°C ·
              {{ slotProps.item.status }}
            </template>
          </Timeline>
        </template>
      </Card>
    </template>

    <Message v-else severity="warn" :closable="false">
      해당 도시({{ cityId }})의 관측 정보를 찾을 수 없습니다.
    </Message>

    <Button label="← 메인 대시보드로 돌아가기" class="mt-2" @click="goBackToDashboard" />
  </div>
</template>
