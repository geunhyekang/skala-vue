import axios from 'axios'

// OpenWeatherMap이 아닌 별도 제공사(Open-Meteo)의 무료 대기질 API — 키 발급 불필요
export async function fetchAirQuality(lat, lon) {
  const { data } = await axios.get('https://air-quality-api.open-meteo.com/v1/air-quality', {
    params: {
      latitude: lat,
      longitude: lon,
      current: 'pm10,pm2_5,us_aqi',
    },
  })
  return {
    pm10: data.current.pm10,
    pm25: data.current.pm2_5,
    usAqi: data.current.us_aqi,
  }
}
