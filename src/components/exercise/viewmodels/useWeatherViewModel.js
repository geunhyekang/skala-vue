import { ref, computed, watch, watchEffect } from 'vue'
import { fetchWeatherList } from '../models/weatherRepository'
import { isHot, isHumid, matchesSearch } from '../models/weatherRules'

export function useWeatherViewModel() {
  // 1. 반응형 상태 관리
  const weatherList = ref(fetchWeatherList())
  const searchQuery = ref('')
  const selectedCityInfo = ref('카드를 클릭하거나 검색해 보세요.')

  // 5. 본인만의 반응형 상태 — 카드 클릭 횟수
  const clickCount = ref(0)

  // 2. computed로 검색 필터링
  //    matchesSearch는 검색어가 빈 문자열이면 true를 반환하므로,
  //    이 computed 하나로 "검색어 없음 -> 원본 전체" 케이스까지 같이 처리됨
  const filteredWeatherList = computed(() =>
    weatherList.value.filter((city) => matchesSearch(city, searchQuery.value)),
  )

  // 5. 본인만의 computed — 검색된 도시들의 평균 기온
  const averageTemp = computed(() => {
    if (filteredWeatherList.value.length === 0) return 0
    const sum = filteredWeatherList.value.reduce((acc, city) => acc + city.temp, 0)
    return Math.round((sum / filteredWeatherList.value.length) * 10) / 10
  })

  // 3. selectedCityInfo 감시 (watch) — 이전 값/새 값을 알아야 하고,
  //    "상태바 문구가 바뀌었다"는 이벤트성 변화를 잡는 것이라 watch가 적합
  watch(selectedCityInfo, (newValue) => {
    console.log('onChange started')
    console.log(`[watch 감지] 상태 바 문구가 업데이트되었습니다 -> "${newValue}"`)
    console.log('onChange completed')
  })

  // 3. searchQuery 감시 (watchEffect) — 콜백 안에서 쓴 반응형 값을
  //    자동으로 추적하기 때문에 의존성 배열을 따로 안 적어도 되고,
  //    mount 시점에도 1회 즉시 실행됨(그래서 검색어 '' 상태 로그도 남음)
  watchEffect(() => {
    console.log(
      `[watchEffect 자동 호출] 현재 검색어 '${searchQuery.value}'에 매칭되는 데이터를 필터링`,
    )
  })

  // 5. 본인만의 watcher — 클릭 횟수 변화 추적
  watch(clickCount, (newValue) => {
    console.log(`[watch 감지] 카드 클릭 횟수: ${newValue}회`)
  })

  function updateSearch(value) {
    searchQuery.value = value
  }

  function selectCity(cityName) {
    selectedCityInfo.value = `${cityName}이 선택되었습니다.`
    clickCount.value += 1
  }

  function showDetail(cityName, status) {
    window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
  }

  return {
    weatherList,
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
  }
}
