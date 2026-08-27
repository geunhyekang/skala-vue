<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { label: '대시보드', to: '/', name: 'weather-home' },
  { label: '통계', to: '/stats', name: 'weather-stats' },
  { label: '소개', to: '/about', name: 'weather-about' },
]
</script>

<template>
  <div id="app-shell">
    <header class="site-header">
      <div class="site-header-inner">
        <span class="app-logo">🌤 날씨</span>
        <nav class="site-nav">
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
      </div>
    </header>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app-shell {
  width: 100%;
}
.site-header {
  border-bottom: 1px solid #e5e8eb;
  padding: 0 32px;
}
.site-header-inner {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 36px;
  height: 64px;
}
.app-logo {
  font-weight: 800;
  font-size: 1.1rem;
}
.site-nav {
  display: flex;
  gap: 28px;
}
.nav-link {
  font-size: 0.95rem;
  font-weight: 600;
  color: #8b95a1;
  text-decoration: none;
}
.nav-link-active {
  color: #191f28;
}
.main-content {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 32px 48px;
}
</style>
