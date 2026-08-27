<script setup>
import { useConfigStore } from '../../stores/configStore'

const configStore = useConfigStore()
</script>

<template>
  <button class="unit-pill" @click="configStore.toggleUnit">
    {{ configStore.unit === 'celsius' ? '섭씨(°C)' : '화씨(°F)' }} · 단위변경
  </button>
</template>

<style scoped>
.unit-pill {
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid #e5e8eb;
  background: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  color: #191f28;
  cursor: pointer;
}
</style>
