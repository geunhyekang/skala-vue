<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToDashboard() {
  router.push('/')
}
</script>

<template>
  <div class="about-view">
    <h3>ℹ️ 서비스 소개</h3>
    <p>이 앱은 Vue 3와 Vue Router 학습을 위한 날씨 대시보드 시뮬레이션입니다.</p>
    <ul>
      <li>
        <code>components/exercise</code> 폴더의 컴포넌트가 실시간 API 대신 Mock 데이터를 표시합니다.
      </li>
      <li>도시를 클릭하면 상세 페이지로 이동하며, 주소만으로 같은 화면을 다시 열 수 있습니다.</li>
      <li>존재하지 않는 경로로 이동하면 Catch-all Route가 404 페이지를 보여줍니다.</li>
    </ul>
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
