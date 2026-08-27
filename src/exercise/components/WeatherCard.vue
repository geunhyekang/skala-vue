<script setup>
import { computed } from 'vue'
import { isHot, isHumid } from '../models/weatherRules'
import { useConfigStore } from '../../stores/configStore'

const props = defineProps({
  city: { type: Object, required: true },
})

const emit = defineEmits(['select-card', 'click-detail'])

const configStore = useConfigStore()

const displayTemp = computed(() => {
  const rawTemp = props.city.temp // 원본 데이터는 섭씨 숫자
  if (configStore.unit === 'fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32) // 화씨 변환 연산
  }
  return rawTemp // 'celsius'일 때는 원본 그대로 반환
})

function handleSelect() {
  emit('select-card', props.city.name)
}

function handleDetail() {
  emit('click-detail', { id: props.city.id, name: props.city.name, status: props.city.status })
}

function handleToggleFavorite() {
  configStore.toggleFavorite(props.city.id)
}
</script>

<template>
  <div class="weather-card" @click="handleSelect">
    <div class="card-header">
      <strong>{{ city.name }}</strong>
      <span>현재 기온: {{ displayTemp }}{{ configStore.unitSymbol }}</span>
    </div>

    <!-- isHot/isHumid 판정은 원본(섭씨) 기준 그대로 유지, 화면 표시만 단위 전환 -->
    <span v-if="isHot(city)" class="badge hot">🔥 더움 (25도 이상)</span>
    <span v-else class="badge cool">❄ 선선함 (25도 미만)</span>

    <span v-if="isHumid(city)" class="badge humid"> 💧 습도 높음 ({{ city.humidity }}%) </span>

    <button class="favorite-button" @click.stop="handleToggleFavorite">
      {{ configStore.isFavorite(city.id) ? '★ 즐겨찾기' : '☆ 즐겨찾기' }}
    </button>

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
.favorite-button {
  display: inline-block;
  margin-top: 8px;
  margin-right: 6px;
  padding: 4px 10px;
  border: 1px solid #f0c419;
  border-radius: 6px;
  background: #fffbe6;
  color: #a67c00;
  cursor: pointer;
}
button {
  display: inline-block;
  margin-top: 8px;
}
</style>
