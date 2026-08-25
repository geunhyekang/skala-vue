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
