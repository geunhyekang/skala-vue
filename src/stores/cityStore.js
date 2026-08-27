import { defineStore } from 'pinia'

const DEFAULT_CITIES = [
  { id: 'city_01', name: '서울', query: 'Seoul,KR' },
  { id: 'city_02', name: '수원', query: 'Suwon,KR' },
  { id: 'city_03', name: '부산', query: 'Busan,KR' },
  { id: 'city_04', name: '제주', query: 'Jeju,KR' },
]

export const useCityStore = defineStore('city', {
  state: () => ({
    cities: [...DEFAULT_CITIES],
  }),
  getters: {
    findById: (state) => (cityId) => state.cities.find((city) => city.id === cityId),
  },
  actions: {
    addCity(name, query) {
      const id = `city_custom_${Date.now()}`
      this.cities.push({ id, name, query })
      return id
    },
  },
})
