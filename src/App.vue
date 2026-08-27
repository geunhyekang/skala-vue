<template>
  <div id="app-shell">
    <nav class="nav-bar">
      <RouterLink to="/" class="nav-link">🌤 날씨 대시보드</RouterLink>
      <RouterLink to="/about" class="nav-link">ℹ️ 서비스 소개</RouterLink>
      <RouterLink to="/stats" class="nav-link">📊 통계</RouterLink>
    </nav>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app-shell {
  max-width: 460px;
  margin: 0 auto;
  font-family: sans-serif;
}
.nav-bar {
  display: flex;
  gap: 8px;
  padding: 10px 0;
  margin-bottom: 12px;
  border-bottom: 1px solid #eee;
}
.nav-link {
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
  color: #333;
}
.nav-link.router-link-active {
  background: #eef2ff;
  color: #3550d4;
  font-weight: bold;
}
.main-content {
  padding: 0 12px 24px;
}
</style>
