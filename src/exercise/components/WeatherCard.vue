<script setup>
import { computed } from 'vue'
import { isHot, isHumid } from '../models/weatherRules'
import { useConfigStore } from '../../stores/configStore'

const props = defineProps({
  city: { type: Object, required: true },
})

const emit = defineEmits(['click-detail'])
const configStore = useConfigStore()

const displayTemp = computed(() => {
  const rawTemp = props.city.temp
  if (configStore.unit === 'fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32)
  }
  return rawTemp
})

function handleDetail() {
  emit('click-detail', { id: props.city.id, name: props.city.name, status: props.city.status })
}

function handleToggleFavorite() {
  configStore.toggleFavorite(props.city.id)
}
</script>

<template>
  <div class="weather-tile" @click="handleDetail">
    <button
      class="favorite-toggle"
      :class="{ active: configStore.isFavorite(city.id) }"
      :aria-label="configStore.isFavorite(city.id) ? '즐겨찾기 해제' : '즐겨찾기 추가'"
      @click.stop="handleToggleFavorite"
    >
      {{ configStore.isFavorite(city.id) ? '★' : '☆' }}
    </button>

    <div class="weather-row-name">{{ city.name }}</div>
    <div class="weather-row-temp">{{ displayTemp }}{{ configStore.unitSymbol }}</div>

    <div class="weather-tags">
      <span v-if="isHot(city)" class="weather-tag hot">🔥 더움 (25도 이상)</span>
      <span v-else class="weather-tag cool">❄ 선선함 (25도 미만)</span>
      <span v-if="isHumid(city)" class="weather-tag humid"
        >💧 습도 높음 ({{ city.humidity }}%)</span
      >
    </div>
  </div>
</template>
