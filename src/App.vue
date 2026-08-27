<script setup>
import UnitToggler from './exercise/components/UnitToggler.vue'
</script>

<template>
  <div id="app-shell">
    <nav class="nav-bar">
      <RouterLink to="/" class="nav-link">🌤 날씨 대시보드</RouterLink>
      <RouterLink to="/about" class="nav-link">ℹ️ 서비스 소개</RouterLink>
      <RouterLink to="/stats" class="nav-link">📊 통계</RouterLink>
      <UnitToggler class="nav-unit-toggler" />
    </nav>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app-shell {
  max-width: 460px;
  margin: 0 auto;
  font-family: sans-serif;
}
.nav-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
  margin-bottom: 12px;
  border-bottom: 1px solid #eee;
}
.nav-link {
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
  color: #333;
}
.nav-link.router-link-active {
  background: #eef2ff;
  color: #3550d4;
  font-weight: bold;
}
.nav-unit-toggler {
  margin-left: auto;
}
.main-content {
  padding: 0 12px 24px;
}
</style>

<!--
<script setup>
import StoreCounter from './components/practices/library/StoreCounter.vue'
import AxiosWeather from './components/practices/library/AxiosWeather.vue'
import AxiosJson from './components/practices/library/AxiosJson.vue'
//import ElementPlus from './components/practices/library/ElementPlus.vue'
//import EcmaScript from './components/practices/library/EcmaScript.vue'
</script>

<template>
  <div class="practice-container">
    <h1>1. Store</h1>
    <hr />
    <StoreCounter />
    <h1>2. Axios</h1>
    <hr />
    <AxiosWeather />
    <AxiosJson />
    <h1>3. Element Plus</h1>
    <hr />
  </div>
</template>

<style>
/* ⚠️ 외부 스타일 파일(예: 버튼 디자인 뭉치)을 이 방 안으로 쏙 가리켜 가져옵니다 */
@import '@/assets/practice.css';
</style>
-->
