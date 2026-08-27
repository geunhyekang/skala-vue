<script setup>
import { useConfigStore } from '../../stores/configStore'

const configStore = useConfigStore()
</script>

<template>
  <v-btn variant="elevated" color="white" size="small" @click="configStore.toggleUnit">
    {{ configStore.unit === 'celsius' ? '섭씨(°C)' : '화씨(°F)' }} · 단위변경
  </v-btn>
</template>
