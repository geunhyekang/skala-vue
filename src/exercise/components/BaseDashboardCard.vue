<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <section>
    <h2 class="section-heading">{{ title }}</h2>
    <slot />
  </section>
</template>
