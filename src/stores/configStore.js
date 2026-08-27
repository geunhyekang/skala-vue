import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  state: () => ({
    unit: 'celsius', // 'celsius' | 'fahrenheit'
    favoriteCityIds: [], // 4. 본인 추가 state
  }),
  getters: {
    unitSymbol: (state) => (state.unit === 'fahrenheit' ? '°F' : '°C'),
    // 4. 본인 추가 getter
    favoriteCount: (state) => state.favoriteCityIds.length,
    isFavorite: (state) => (cityId) => state.favoriteCityIds.includes(cityId),
  },
  actions: {
    toggleUnit() {
      this.unit = this.unit === 'celsius' ? 'fahrenheit' : 'celsius'
    },
    // 4. 본인 추가 action
    toggleFavorite(cityId) {
      const index = this.favoriteCityIds.indexOf(cityId)
      if (index === -1) {
        this.favoriteCityIds.push(cityId)
      } else {
        this.favoriteCityIds.splice(index, 1)
      }
    },
  },
})
