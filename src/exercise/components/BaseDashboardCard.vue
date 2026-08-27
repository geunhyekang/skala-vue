<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <section class="dashboard-card">
    <h3 class="dashboard-card__title">{{ title }}</h3>
    <div class="dashboard-card__body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.dashboard-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 12px 14px;
  margin-bottom: 14px;
  background: #fff;
}
.dashboard-card__title {
  margin: 0 0 10px;
  font-size: 1em;
}
</style>
