# 🌤 Weather Dashboard

Vue 3 기반으로 진행한 "날씨 대시보드" 실습 프로젝트 결과물입니다. Mockup 단계부터 시작해 Composition API, 컴포넌트 분리, Vue Router, Pinia, Axios(OpenWeatherMap 연동), 외부 UI 라이브러리 적용까지 회차별 과제를 하나의 앱으로 이어서 발전시켰습니다.

## 기술 스택

| 영역          | 사용 기술                                                                         |
| ------------- | --------------------------------------------------------------------------------- |
| 프레임워크    | Vue 3 (`<script setup>`, Composition API)                                         |
| 빌드 도구     | Vite                                                                              |
| 라우팅        | Vue Router 4                                                                      |
| 상태관리      | Pinia                                                                             |
| HTTP 통신     | Axios                                                                             |
| UI 라이브러리 | PrimeVue 4 + PrimeIcons + PrimeFlex                                               |
| 폰트          | Pretendard                                                                        |
| 외부 API      | OpenWeatherMap (Current Weather, 5 Day / 3 Hour Forecast), open.er-api.com (환율) |

## 폴더 구조

```
src/
├── main.js                     # Vue 앱 진입점, Pinia/Router/PrimeVue 플러그인 등록
├── App.vue                     # 전역 레이아웃 (헤더 내비게이션 + RouterView)
├── assets/
│   └── toss-theme.css          # 전역 디자인 시스템 (색상 토큰, 카드/버튼/그리드 스타일)
├── stores/
│   ├── configStore.js          # 온도 단위(섭씨/화씨), 즐겨찾기 상태
│   └── cityStore.js            # 추적 중인 도시 목록 (검색으로 추가된 도시 포함)
└── exercise/
    ├── models/
    │   └── weatherRules.js     # 순수 도메인 규칙 (더움/습함 판정, 검색 매칭, 온도 변환)
    ├── services/
    │   ├── weatherApi.js       # Axios 인스턴스 + OpenWeatherMap 원본 API 호출
    │   ├── weatherService.js   # 화면에서 쓰는 형태로 가공된 날씨 조회 함수
    │   └── exchangeRateApi.js  # 기타 외부 API(환율) 연동
    ├── components/
    │   ├── BaseDashboardCard.vue
    │   ├── SearchBar.vue
    │   ├── WeatherCard.vue
    │   ├── StatusBanner.vue
    │   └── UnitToggler.vue
    ├── views/
    │   ├── WeatherHomeView.vue
    │   ├── WeatherDetailView.vue
    │   ├── WeatherAboutView.vue
    │   ├── WeatherStatsView.vue
    │   └── NotFoundView.vue
    └── router/
        └── index.js
```

## 회차별 구현 내용

### 1. Weather Mockup (v-for / v-if / 이벤트)

- `weatherList`를 배열로 정의하고 `v-for` + `:key`로 도시 카드를 반복 렌더링
- 기온 25도를 기준으로 `v-if`/`v-else`로 "더움"/"선선함" 배지를 조건부 표시
- 검색 input에 `:value` / `@input`을 직접 연결해 양방향 바인딩 동작 원리를 구현
- 카드 클릭, 상세보기 버튼 클릭에 `@click`, `@click.stop`을 적용해 이벤트 버블링 제어

### 2. Weather Composition (Composition API)

- `searchQuery`, `selectedCityInfo`, `weatherList`를 반응형 상태로 분리
- `computed`로 검색어에 매칭되는 도시 목록을 필터링
- `watch`로 선택된 도시 문구 변경을 감지, `watchEffect`로 검색어 변경을 자동 추적해 콘솔 로그 출력

### 3. Weather Component (컴포넌트 분리)

- `WeatherHomeView`(부모)가 모든 반응형 상태를 소유
- `BaseDashboardCard`가 `slot`으로 검색창/목록 영역의 박스 디자인을 공통화
- `SearchBar`, `WeatherCard`는 `props`로 데이터를 받고 `emits`로 이벤트를 부모에 전달하는 단방향 데이터 흐름 적용

### 4. Weather Router (Vue Router)

- `/`, `/about`, `/stats`, `/weather/:cityId`, `/:pathMatch(.*)*`(catch-all) 라우트 구성
- 모든 라우트를 `() => import(...)`로 지연 로딩(lazy loading) 처리
- 상세보기 버튼 클릭 시 `window.alert` 대신 `router.push`로 페이지 이동하도록 변경

### 5. Weather Store (Pinia)

- `configStore`에 `unit`(state), `unitSymbol`(getter), `toggleUnit`(action)으로 섭씨/화씨 전환 구현
- `favoriteCityIds` state와 `isFavorite`/`favoriteCount` getter, `toggleFavorite` action을 추가해 즐겨찾기 기능으로 확장

### 6. Weather Axios (실제 API 연동)

- Mock 데이터를 제거하고 OpenWeatherMap Current Weather API로 실시간 날씨 데이터 조회
- 5 Day / 3 Hour Forecast API를 추가로 연동해 상세 페이지에 예보 정보 표시
- 환율 API(open.er-api.com)를 붙여 OpenWeatherMap 외의 외부 API 연동 사례도 구현
- API 키는 `.env`의 `VITE_OPENWEATHER_API_KEY`로 분리, 저장소에는 커밋되지 않도록 처리

### 7. Weather UI Library (PrimeVue)

- Mock 데이터를 제거하고 OpenWeatherMap Current Weather API로 실시간 날씨 데이터 조회
- 5 Day / 3 Hour Forecast API를 추가로 연동해 상세 페이지에 예보 정보 표시
- 환율 API(open.er-api.com)를 붙여 OpenWeatherMap 외의 외부 API 연동 사례도 구현
- API 키는 `.env`의 `VITE_OPENWEATHER_API_KEY`로 분리, 저장소에는 커밋되지 않도록 처리

### 7. Weather UI Library (PrimeVue)

- 처음엔 Vuetify로 적용해봤다가, 컴포넌트 다양성과 커스터마이징 편의성을 고려해 PrimeVue로 최종 교체
- `definePreset`으로 커스텀 테마를 만들고, 전역 CSS로 카드/버튼/태그/그리드 스타일을 다듬어 자체 디자인 시스템 구축
- Toss / PickCare 등 레퍼런스를 참고해 히어로 배너, 카드 그리드, 통계 타일 등 UI를 여러 차례 반복 개선

## 주요 기능

- **실시간 날씨 조회**: 등록된 도시들의 현재 기온·날씨 상태·습도를 실시간으로 표시
- **도시 검색 및 추가**: 등록된 도시는 이름으로 즉시 필터링, 등록되지 않은 도시는 영문명으로 검색해 목록에 추가 가능
- **즐겨찾기**: 자주 보는 지역을 즐겨찾기하면 상단에 고정된 섹션에서 모아보기 가능 (비어있어도 섹션 위치는 고정)
- **온도 단위 변환**: 섭씨/화씨 토글 시 대시보드·즐겨찾기·상세 페이지 전체에 반영
- **상세 정보 페이지**: 관측 지점, 체감온도, 최고/최저기온, 대기 습도, 풍속, 일출·일몰 시각, 3시간 단위 예보 제공
- **통계 페이지**: 등록된 전체 도시의 평균 기온, 더움/선선함 도시 수 집계
- **404 페이지**: 존재하지 않는 경로 접근 시 안내 화면과 메인 이동 버튼 제공

## 실행 방법

```bash
npm install
```

프로젝트 루트에 `.env` 파일을 만들고 OpenWeatherMap API 키를 등록합니다.

```
VITE_OPENWEATHER_API_KEY=발급받은_키
```

```bash
npm run dev
```

## 트러블슈팅 / 배운 점

- 폴더를 여러 번 재구성하는 과정에서 상대 경로(`../`) 계산이 꼬여 `Failed to resolve import` 에러를 여러 차례 겪음 → 폴더 depth를 먼저 확정하고 import 경로를 일괄 정리하는 방식으로 해결
- `primevue`를 버전 고정 없이 설치했다가 최신 메이저 버전(v5)에서 예기치 못한 라이선스 워터마크가 발생 → 검증된 v4로 버전을 고정해 해결
- Mock 데이터에서 실제 API로 전환할 때, 서비스 레이어 함수들을 처음부터 `async`로 설계해둔 덕분에 View 컴포넌트 코드를 거의 수정하지 않고 교체할 수 있었음
