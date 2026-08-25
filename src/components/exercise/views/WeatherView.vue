<script setup>
import { useWeatherViewModel } from '../viewmodels/useWeatherViewModel'

const {
  searchQuery,
  selectedCityInfo,
  filteredWeatherList,
  clickCount,
  averageTemp,
  updateSearch,
  selectCity,
  showDetail,
  isHot,
  isHumid,
} = useWeatherViewModel()
</script>

<template>
  <div class="weather-mockup">
    <h2>🌤 날씨 Composition</h2>

    <div class="search-box">
      <label for="citySearch">🔍 도시 검색</label>
      <input
        id="citySearch"
        type="text"
        placeholder="검색할 도시 이름 입력"
        :value="searchQuery"
        @input="updateSearch($event.target.value)"
      />
      <p>검색 중인 도시: {{ searchQuery || '없음' }}</p>
    </div>

    <p class="selected-message">{{ selectedCityInfo }}</p>
    <p class="stat-line">클릭 횟수: {{ clickCount }}회 · 평균 기온: {{ averageTemp }}°C</p>

    <!-- 4. 검색 결과 표시: filteredWeatherList 하나로 3가지 케이스 모두 처리 -->
    <div class="card-list">
      <div
        v-for="city in filteredWeatherList"
        :key="city.id"
        class="weather-card"
        @click="selectCity(city.name)"
      >
        <div class="card-header">
          <strong>{{ city.name }}</strong>
          <span>현재 기온: {{ city.temp }}°C</span>
        </div>

        <span v-if="isHot(city)" class="badge hot">🔥 더움 (25도 이상)</span>
        <span v-else class="badge cool">❄ 선선함 (25도 미만)</span>

        <span v-if="isHumid(city)" class="badge humid"> 💧 습도 높음 ({{ city.humidity }}%) </span>

        <button @click.stop="showDetail(city.name, city.status)">상세보기</button>
      </div>

      <p v-if="filteredWeatherList.length === 0" class="empty">
        검색 결과와 일치하는 도시가 없습니다.
      </p>
    </div>
  </div>
</template>

<style scoped>
.weather-mockup {
  max-width: 420px;
  margin: 0 auto;
  font-family: sans-serif;
}
.search-box {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
}
.search-box input {
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.selected-message {
  background: #eef7ee;
  color: #2f7a2f;
  padding: 8px;
  border-radius: 6px;
  text-align: center;
}
.stat-line {
  text-align: center;
  color: #555;
  font-size: 0.9em;
  margin: 4px 0 12px;
}
.card-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.weather-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 12px;
  cursor: pointer;
}
.card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}
.badge {
  display: inline-block;
  margin-right: 6px;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.85em;
}
.badge.hot {
  background: #ffe1e1;
  color: #c0392b;
}
.badge.cool {
  background: #e1f0ff;
  color: #2471a3;
}
.badge.humid {
  background: #e6f7ff;
  color: #1a7fa8;
}
button {
  display: block;
  margin-top: 8px;
}
.empty {
  text-align: center;
  color: #888;
}
</style>
