<script setup>
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import UnitToggler from './exercise/components/UnitToggler.vue'
</script>

<template>
  <div id="app-shell">
    <Toolbar>
      <template #start>
        <span class="text-xl font-bold mr-3">🌤 날씨 대시보드</span>
        <Button as="router-link" to="/" label="대시보드" text />
        <Button as="router-link" to="/about" label="소개" text />
        <Button as="router-link" to="/stats" label="통계" text />
      </template>
      <template #end>
        <UnitToggler />
      </template>
    </Toolbar>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app-shell {
  max-width: 480px;
  margin: 0 auto;
  font-family: sans-serif;
}
.main-content {
  padding: 16px 12px;
}
</style>
