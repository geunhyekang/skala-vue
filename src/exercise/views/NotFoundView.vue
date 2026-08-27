<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="not-found">
    <p class="icon">🌞❓</p>
    <h3>페이지를 찾을 수 없습니다.</h3>
    <p class="desc">요청하신 주소가 존재하지 않거나, 아직 개발되지 않았습니다.</p>
    <button @click="goHome">날씨 메인으로 이동</button>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 40px 0;
}
.icon {
  font-size: 2.5em;
  margin-bottom: 8px;
}
.desc {
  color: #666;
  margin-bottom: 16px;
}
button {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: #3550d4;
  color: #fff;
  cursor: pointer;
}
</style>
