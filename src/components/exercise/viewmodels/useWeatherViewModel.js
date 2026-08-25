import { ref, computed } from 'vue'
import { fetchWeatherList } from '../models/weatherRepository'
import { isHot, isHumid, matchesSearch } from '../models/weatherRules'

export function useWeatherViewModel() {
  const weatherList = ref(fetchWeatherList())
  const searchTerm = ref('')
  const selectedMessage = ref('카드를 클릭하거나 검색해 보세요.')

  const filteredList = computed(() =>
    weatherList.value.filter((city) => matchesSearch(city, searchTerm.value)),
  )

  function updateSearch(value) {
    searchTerm.value = value
  }

  function selectCity(cityName) {
    selectedMessage.value = `${cityName}이 선택되었습니다.`
  }

  function showDetail(cityName, status) {
    window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
  }

  return {
    searchTerm,
    selectedMessage,
    filteredList,
    updateSearch,
    selectCity,
    showDetail,
    isHot,
    isHumid,
  }
}
