<script setup>
import Card from 'primevue/card'

defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <Card class="mb-4">
    <template #title>{{ title }}</template>
    <template #content>
      <slot />
    </template>
  </Card>
</template>
