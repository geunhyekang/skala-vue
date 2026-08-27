<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchUsdToKrwRate } from '../services/exchangeRateApi'
import Card from 'primevue/card'
import Button from 'primevue/button'

const router = useRouter()
const usdToKrw = ref(null)

onMounted(async () => {
  try {
    usdToKrw.value = await fetchUsdToKrwRate()
  } catch (err) {
    usdToKrw.value = null
  }
})

function goToDashboard() {
  router.push('/')
}
</script>

<template>
  <Card>
    <template #title>ℹ️ 서비스 소개</template>
    <template #content>
      <p>이 앱은 Vue 3, Vue Router, Pinia, Axios, PrimeVue 학습을 위한 날씨 대시보드입니다.</p>
      <ul>
        <li>날씨 데이터는 OpenWeatherMap API에서 실시간으로 가져옵니다.</li>
        <li>도시를 클릭하면 상세 페이지로 이동하며, 3시간 단위 예보도 함께 보여줍니다.</li>
        <li>존재하지 않는 경로로 이동하면 Catch-all Route가 404 페이지를 보여줍니다.</li>
      </ul>
      <p v-if="usdToKrw" class="text-green-600 mt-3">
        💱 오늘의 환율(기타 외부 API): 1 USD ≈ {{ Math.round(usdToKrw) }} KRW
      </p>
    </template>
    <template #footer>
      <Button label="메인 대시보드로 이동" class="w-full" @click="goToDashboard" />
    </template>
  </Card>
</template>
