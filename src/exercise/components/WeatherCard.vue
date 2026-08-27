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
  const rawTemp = props.city.temp
  if (configStore.unit === 'fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32)
  }
  return rawTemp
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
  <v-card class="mb-3" variant="tonal" @click="handleSelect">
    <v-card-title class="d-flex justify-space-between">
      <span>{{ city.name }}</span>
      <span>{{ displayTemp }}{{ configStore.unitSymbol }}</span>
    </v-card-title>

    <v-card-text>
      <v-chip v-if="isHot(city)" color="red" size="small" class="mr-2">🔥 더움 (25도 이상)</v-chip>
      <v-chip v-else color="blue" size="small" class="mr-2">❄ 선선함 (25도 미만)</v-chip>

      <v-chip v-if="isHumid(city)" color="cyan" size="small">
        💧 습도 높음 ({{ city.humidity }}%)
      </v-chip>
    </v-card-text>

    <v-card-actions>
      <v-btn variant="tonal" color="amber" size="small" @click.stop="handleToggleFavorite">
        {{ configStore.isFavorite(city.id) ? '★ 즐겨찾기' : '☆ 즐겨찾기' }}
      </v-btn>
      <v-btn variant="elevated" color="primary" size="small" @click.stop="handleDetail">
        상세보기
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
