<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchUsdToKrwRate } from '../services/exchangeRateApi'

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
  <div class="about-view">
    <h3>ℹ️ 서비스 소개</h3>
    <p>이 앱은 Vue 3, Vue Router, Pinia, Axios 학습을 위한 날씨 대시보드입니다.</p>
    <ul>
      <li>날씨 데이터는 OpenWeatherMap API에서 실시간으로 가져옵니다.</li>
      <li>도시를 클릭하면 상세 페이지로 이동하며, 3시간 단위 예보도 함께 보여줍니다.</li>
      <li>존재하지 않는 경로로 이동하면 Catch-all Route가 404 페이지를 보여줍니다.</li>
    </ul>
    <p v-if="usdToKrw" class="fun-fact">
      💱 오늘의 환율(기타 외부 API): 1 USD ≈ {{ Math.round(usdToKrw) }} KRW
    </p>
    <button class="cta-button" @click="goToDashboard">메인 대시보드로 이동</button>
  </div>
</template>

<style scoped>
.about-view {
  text-align: left;
}
.about-view ul {
  padding-left: 20px;
  color: #444;
  line-height: 1.6;
}
.fun-fact {
  margin-top: 12px;
  color: #2f7a2f;
}
.cta-button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 12px;
  border: none;
  border-radius: 6px;
  background: #3550d4;
  color: #fff;
  cursor: pointer;
}
</style>
