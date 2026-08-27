<script setup>
import Message from 'primevue/message'

defineProps({
  message: { type: String, required: true },
  clickCount: { type: Number, default: 0 },
  averageTemp: { type: Number, default: 0 },
})
</script>

<template>
  <Message severity="success" :closable="false" class="mb-4">
    <div>{{ message }}</div>
    <div class="text-sm">클릭 횟수: {{ clickCount }}회 · 평균 기온: {{ averageTemp }}°C</div>
  </Message>
</template>
