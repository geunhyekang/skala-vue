<script setup>
defineProps({
  message: { type: String, required: true },
  clickCount: { type: Number, default: 0 },
  averageTemp: { type: Number, default: 0 },
})
</script>

<template>
  <v-alert type="success" variant="tonal" class="mb-4">
    <div>{{ message }}</div>
    <div class="text-caption">클릭 횟수: {{ clickCount }}회 · 평균 기온: {{ averageTemp }}°C</div>
  </v-alert>
</template>
