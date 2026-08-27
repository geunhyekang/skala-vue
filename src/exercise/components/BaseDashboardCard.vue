<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <section>
    <div class="section-heading-row">
      <h2 class="section-heading">{{ title }}</h2>
      <div v-if="$slots.actions">
        <slot name="actions" />
      </div>
    </div>
    <div class="weather-grid">
      <slot />
    </div>
  </section>
</template>
