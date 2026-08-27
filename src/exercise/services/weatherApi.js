import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

const client = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: API_KEY,
    units: 'metric', // 섭씨로 바로 받기
    lang: 'kr',
  },
})

export async function fetchCurrentWeatherByQuery(query) {
  const { data } = await client.get('/weather', { params: { q: query } })
  return data
}

// 요구사항 2: OpenWeatherMap의 다른 API(5일/3시간 예보)로 기능 확장
export async function fetchForecastByQuery(query) {
  const { data } = await client.get('/forecast', { params: { q: query } })
  return data
}
