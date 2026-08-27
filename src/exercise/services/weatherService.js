import { fetchCurrentWeatherByQuery, fetchForecastByQuery } from './weatherApi'

const CITY_REGISTRY = [
  { id: 'city_01', name: '서울', query: 'Seoul,KR' },
  { id: 'city_02', name: '수원', query: 'Suwon,KR' },
  { id: 'city_03', name: '부산', query: 'Busan,KR' },
  { id: 'city_04', name: '제주', query: 'Jeju,KR' },
]

function mapWeatherMainToStatus(main) {
  const map = {
    Clear: '맑음',
    Clouds: '구름',
    Rain: '비',
    Drizzle: '비',
    Thunderstorm: '뇌우',
    Snow: '눈',
    Mist: '안개',
    Haze: '안개',
    Fog: '안개',
  }
  return map[main] ?? main
}

export async function fetchWeatherList() {
  const results = await Promise.all(
    CITY_REGISTRY.map(async (city) => {
      const data = await fetchCurrentWeatherByQuery(city.query)
      return {
        id: city.id,
        name: city.name,
        temp: Math.round(data.main.temp),
        status: mapWeatherMainToStatus(data.weather[0].main),
        humidity: data.main.humidity,
      }
    }),
  )
  return results
}

export async function fetchWeatherDetail(cityId) {
  const city = CITY_REGISTRY.find((c) => c.id === cityId)
  if (!city) return null

  const data = await fetchCurrentWeatherByQuery(city.query)
  return {
    region: `대한민국 ${city.name}`,
    temp: Math.round(data.main.temp),
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  }
}

// 요구사항 2: 예보 API 추가 활용
export async function fetchWeatherForecast(cityId) {
  const city = CITY_REGISTRY.find((c) => c.id === cityId)
  if (!city) return []

  const data = await fetchForecastByQuery(city.query)
  // 3시간 간격 데이터 중 앞 4개(약 12시간)만 사용
  return data.list.slice(0, 4).map((entry) => ({
    time: entry.dt_txt,
    temp: Math.round(entry.main.temp),
    status: mapWeatherMainToStatus(entry.weather[0].main),
  }))
}
