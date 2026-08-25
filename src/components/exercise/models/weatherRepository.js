export function fetchWeatherList() {
  return [
    { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
    { id: 'city_02', name: '수원', temp: 24, status: '비' },
    { id: 'city_03', name: '부산', temp: 26, status: '구름' },
    // 본인만의 데이터 추가
    { id: 'city_04', name: '제주', temp: 30, status: '맑음', humidity: 78 },
    { id: 'city_05', name: '진주', temp: 34, status: '맑음', humidity: 54 },
  ]
}
