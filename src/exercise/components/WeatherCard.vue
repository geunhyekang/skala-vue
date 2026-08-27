<script setup>
import { isHot, isHumid } from '../models/weatherRules'

const props = defineProps({
  city: { type: Object, required: true },
})

const emit = defineEmits(['select-card', 'click-detail'])

function handleSelect() {
  emit('select-card', props.city.name)
}

function handleDetail() {
  emit('click-detail', { id: props.city.id, name: props.city.name, status: props.city.status })
}
</script>

<template>
  <div class="weather-card" @click="handleSelect">
    <div class="card-header">
      <strong>{{ city.name }}</strong>
      <span>현재 기온: {{ city.temp }}°C</span>
    </div>

    <span v-if="isHot(city)" class="badge hot">🔥 더움 (25도 이상)</span>
    <span v-else class="badge cool">❄ 선선함 (25도 미만)</span>

    <span v-if="isHumid(city)" class="badge humid"> 💧 습도 높음 ({{ city.humidity }}%) </span>

    <button @click.stop="handleDetail">상세보기</button>
  </div>
</template>

<style scoped>
.weather-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 10px;
  cursor: pointer;
}
.card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}
.badge {
  display: inline-block;
  margin-right: 6px;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.85em;
}
.badge.hot {
  background: #ffe1e1;
  color: #c0392b;
}
.badge.cool {
  background: #e1f0ff;
  color: #2471a3;
}
.badge.humid {
  background: #e6f7ff;
  color: #1a7fa8;
}
button {
  display: block;
  margin-top: 8px;
}
</style>
