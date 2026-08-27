<script setup>
import Button from 'primevue/button'
import UnitToggler from './exercise/components/UnitToggler.vue'

const navItems = [
  { label: '대시보드', to: '/' },
  { label: '소개', to: '/about' },
  { label: '통계', to: '/stats' },
]
</script>

<template>
  <div id="app-shell">
    <header class="app-header">
      <span class="app-title">🌤 날씨</span>
      <nav class="nav-buttons">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          v-slot="{ navigate, isActive }"
          custom
        >
          <Button
            :label="item.label"
            :severity="isActive ? undefined : 'secondary'"
            :text="!isActive"
            size="small"
            @click="navigate"
          />
        </RouterLink>
      </nav>
      <UnitToggler />
    </header>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app-shell {
  max-width: 480px;
  margin: 0 auto;
}
.app-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 4px;
}
.app-title {
  font-weight: 800;
  font-size: 1.1rem;
  margin-right: 8px;
}
.nav-buttons {
  display: flex;
  gap: 4px;
  margin-right: auto;
}
.main-content {
  padding: 0 4px 32px;
}
</style>
