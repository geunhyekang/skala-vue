<script setup>
import UnitToggler from './UnitToggler.vue'

defineProps({
  favoriteCount: { type: Number, default: 0 },
  averageTemp: { type: Number, default: 0 },
})
</script>

<template>
  <div class="promo-card">
    <div>
      <div class="promo-title">⭐ 즐겨찾기 {{ favoriteCount }}개</div>
      <div class="promo-sub">현재 평균 기온 {{ averageTemp }}°C 기준</div>
    </div>
    <UnitToggler />
  </div>
</template>
