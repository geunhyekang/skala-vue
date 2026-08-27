<script setup>
import { useRouter } from 'vue-router'
import Button from 'primevue/button'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="text-center py-8">
    <div style="font-size: 2.5rem" class="mb-2">🌞❓</div>
    <h3>페이지를 찾을 수 없습니다.</h3>
    <p class="text-color-secondary mb-4">
      요청하신 주소가 존재하지 않거나, 아직 개발되지 않았습니다.
    </p>
    <Button label="날씨 메인으로 이동" @click="goHome" />
  </div>
</template>
