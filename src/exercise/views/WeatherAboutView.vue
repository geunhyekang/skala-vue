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
  <div>
    <h2 class="section-heading">ℹ️ 서비스 소개</h2>

    <div class="step-card">
      <div class="step-label">STEP 1</div>
      <div class="step-title">실시간 날씨를 한눈에 확인하세요</div>
      <div class="step-desc">
        OpenWeatherMap API로 등록된 도시들의 실시간 기온과 날씨 상태를 바로 가져와요.
      </div>
    </div>

    <div class="step-card">
      <div class="step-label">STEP 2</div>
      <div class="step-title">도시 이름으로 바로 검색하세요</div>
      <div class="step-desc">
        한글로 도시 이름을 입력하면 실시간으로 필터링된 결과를 보여드려요.
      </div>
    </div>

    <div class="step-card">
      <div class="step-label">STEP 3</div>
      <div class="step-title">자주 보는 지역은 즐겨찾기하세요</div>
      <div class="step-desc">즐겨찾기한 지역은 대시보드 상단에 따로 모아서 보여드려요.</div>
    </div>

    <div class="step-card">
      <div class="step-label">STEP 4</div>
      <div class="step-title">카드를 눌러 상세 정보와 예보까지</div>
      <div class="step-desc">
        지역 카드를 클릭하면 상세 관측 정보와 3시간 단위 예보까지 확인할 수 있어요.
      </div>
    </div>

    <p v-if="usdToKrw" style="color: #8b95a1; font-size: 0.85rem; margin-top: 16px">
      💱 오늘의 환율(기타 외부 API): 1 USD ≈ {{ Math.round(usdToKrw) }} KRW
    </p>

    <button class="pill-button-primary" @click="goToDashboard">메인 대시보드로 이동</button>
  </div>
</template>
