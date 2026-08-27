<script setup>
defineProps({
  message: { type: String, required: true },
  clickCount: { type: Number, default: 0 },
  averageTemp: { type: Number, default: 0 },
})
</script>

<template>
  <div class="status-banner">
    <p class="message">{{ message }}</p>
    <p class="stat-line">클릭 횟수: {{ clickCount }}회 · 평균 기온: {{ averageTemp }}°C</p>
  </div>
</template>

<style scoped>
.status-banner {
  text-align: center;
  margin-bottom: 14px;
}
.message {
  background: #eef7ee;
  color: #2f7a2f;
  padding: 8px;
  border-radius: 6px;
  margin: 0 0 4px;
}
.stat-line {
  color: #555;
  font-size: 0.9em;
  margin: 0;
}
</style>
