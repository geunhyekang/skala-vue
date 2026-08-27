<script setup>
import { useConfigStore } from '../../stores/configStore'

const configStore = useConfigStore()
</script>

<template>
  <button class="unit-toggler" @click="configStore.toggleUnit">
    날씨단위: {{ configStore.unit === 'celsius' ? '섭씨(°C)' : '화씨(°F)' }} · 단위변경
  </button>
</template>

<style scoped>
.unit-toggler {
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background: #3550d4;
  color: #fff;
  cursor: pointer;
  white-space: nowrap;
}
</style>
