// 지금은 Mock 데이터를 async로 흉내내지만, 실제 연동 시엔
// 이 두 함수 내부만 fetch()로 바꾸면 됨. 호출부(View)는 수정 불필요.

const mockWeatherList = [
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
  { id: 'city_04', name: '제주', temp: 30, status: '맑음', humidity: 78 },
]

const mockWeatherDetail = {
  city_01: { region: '대한민국 서울특별시', temp: 28, humidity: 55, windSpeed: 2.5 },
  city_02: { region: '대한민국 경기도 수원시', temp: 24, humidity: 68, windSpeed: 1.8 },
  city_03: { region: '대한민국 부산광역시', temp: 26, humidity: 60, windSpeed: 3.2 },
  city_04: { region: '대한민국 제주특별자치도', temp: 30, humidity: 78, windSpeed: 4.1 },
}

export async function fetchWeatherList() {
  // 실제 연동 시: const res = await fetch(`${API_BASE}/weather`); return res.json()
  return mockWeatherList
}

export async function fetchWeatherDetail(cityId) {
  // 실제 연동 시: const res = await fetch(`${API_BASE}/weather/${cityId}`); return res.json()
  return mockWeatherDetail[cityId] ?? null
}
