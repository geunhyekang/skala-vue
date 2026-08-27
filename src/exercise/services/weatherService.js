import { fetchCurrentWeatherByQuery, fetchForecastByQuery } from './weatherApi'

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

function formatTime(unixSeconds) {
  return new Date(unixSeconds * 1000).toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export async function fetchWeatherList(cities) {
  const results = await Promise.all(
    cities.map(async (city) => {
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

export async function fetchWeatherDetail(city) {
  if (!city) return null
  const data = await fetchCurrentWeatherByQuery(city.query)
  return {
    region: city.name,
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    tempMin: Math.round(data.main.temp_min),
    tempMax: Math.round(data.main.temp_max),
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    sunrise: formatTime(data.sys.sunrise),
    sunset: formatTime(data.sys.sunset),
  }
}

export async function fetchWeatherForecast(city) {
  if (!city) return []
  const data = await fetchForecastByQuery(city.query)
  return data.list.slice(0, 4).map((entry) => ({
    time: entry.dt_txt,
    temp: Math.round(entry.main.temp),
    status: mapWeatherMainToStatus(entry.weather[0].main),
  }))
}

export async function searchCityWeather(cityName) {
  const data = await fetchCurrentWeatherByQuery(cityName)
  return {
    name: data.name,
    query: cityName,
    temp: Math.round(data.main.temp),
    status: mapWeatherMainToStatus(data.weather[0].main),
    humidity: data.main.humidity,
  }
}
