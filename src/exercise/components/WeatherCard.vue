<script setup>
import { computed } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
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
  <Card class="mb-3 cursor-pointer" @click="handleSelect">
    <template #title>
      <div class="flex justify-content-between">
        <span>{{ city.name }}</span>
        <span>{{ displayTemp }}{{ configStore.unitSymbol }}</span>
      </div>
    </template>
    <template #content>
      <Tag v-if="isHot(city)" severity="danger" value="🔥 더움 (25도 이상)" class="mr-2" />
      <Tag v-else severity="info" value="❄ 선선함 (25도 미만)" class="mr-2" />
      <Tag v-if="isHumid(city)" severity="secondary" :value="`💧 습도 높음 (${city.humidity}%)`" />
    </template>
    <template #footer>
      <Button
        :label="configStore.isFavorite(city.id) ? '★ 즐겨찾기' : '☆ 즐겨찾기'"
        severity="secondary"
        size="small"
        class="mr-2"
        @click.stop="handleToggleFavorite"
      />
      <Button label="상세보기" size="small" @click.stop="handleDetail" />
    </template>
  </Card>
</template>
