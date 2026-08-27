<script setup>
import { useRoute } from 'vue-router'
import UnitToggler from './exercise/components/UnitToggler.vue'

const route = useRoute()

const navItems = [
  { label: '대시보드', to: '/', name: 'weather-home' },
  { label: '소개', to: '/about', name: 'weather-about' },
  { label: '통계', to: '/stats', name: 'weather-stats' },
]
</script>

<template>
  <div id="app-shell">
    <header class="app-header">
      <span class="app-logo">🌤 날씨</span>
      <nav class="nav-links">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          :class="{ 'nav-link-active': route.name === item.name }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
      <UnitToggler v-if="route.name === 'weather-home'" />
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
  gap: 20px;
  padding: 20px 4px 16px;
  border-bottom: 1px solid #e5e8eb;
}
.app-logo {
  font-weight: 800;
  font-size: 1.05rem;
}
.nav-links {
  display: flex;
  gap: 16px;
  margin-right: auto;
}
.nav-link {
  font-size: 0.92rem;
  font-weight: 600;
  color: #8b95a1;
  text-decoration: none;
}
.nav-link-active {
  color: #191f28;
}
.main-content {
  padding: 0 4px 32px;
}
</style>
