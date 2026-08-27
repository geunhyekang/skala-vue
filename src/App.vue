<script setup>
import UnitToggler from './exercise/components/UnitToggler.vue'
</script>

<template>
  <v-app>
    <v-app-bar color="primary" density="comfortable">
      <v-app-bar-title>🌤 날씨 대시보드</v-app-bar-title>
      <v-btn to="/" variant="text">대시보드</v-btn>
      <v-btn to="/about" variant="text">소개</v-btn>
      <v-btn to="/stats" variant="text">통계</v-btn>
      <v-spacer />
      <UnitToggler />
    </v-app-bar>

    <v-main>
      <v-container style="max-width: 480px">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
