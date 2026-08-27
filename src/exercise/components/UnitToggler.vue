<script setup>
import Button from 'primevue/button'
import { useConfigStore } from '../../stores/configStore'

const configStore = useConfigStore()
</script>

<template>
  <Button
    :label="`${configStore.unit === 'celsius' ? '섭씨(°C)' : '화씨(°F)'} · 단위변경`"
    size="small"
    @click="configStore.toggleUnit"
  />
</template>
