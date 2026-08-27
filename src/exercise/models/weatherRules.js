export const HOT_THRESHOLD = 25
export const HUMID_THRESHOLD = 70

export function isHot(city) {
  return city.temp >= HOT_THRESHOLD
}

export function isHumid(city) {
  return typeof city.humidity === 'number' && city.humidity >= HUMID_THRESHOLD
}

export function matchesSearch(city, term) {
  if (!term.trim()) return true
  return city.name.includes(term)
}

export function convertTemp(tempCelsius, unit) {
  if (unit === 'fahrenheit') {
    return Math.round((tempCelsius * 9) / 5 + 32)
  }
  return tempCelsius
}

export function classifyAirQuality(usAqi) {
  if (usAqi == null) return '정보 없음'
  if (usAqi <= 50) return '좋음'
  if (usAqi <= 100) return '보통'
  if (usAqi <= 150) return '민감군 주의'
  return '나쁨'
}
