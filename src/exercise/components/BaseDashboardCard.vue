<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <v-card class="mb-4" variant="outlined">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>
