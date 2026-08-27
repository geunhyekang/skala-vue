import axios from 'axios'

// 키 없이 쓸 수 있는 무료 환율 API — "기타 외부 API 연동" 예시
export async function fetchUsdToKrwRate() {
  const { data } = await axios.get('https://open.er-api.com/v6/latest/USD')
  return data.rates.KRW
}
