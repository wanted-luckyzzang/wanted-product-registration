# wanted-product-registration

## 🥽 배포 링크

<h2><a href='https://luckyzzang-product-registration.netlify.app/'>https://somber-sunset-e11.notion.site/_-_-b96ebb328d044f718f228de869934e0f</a></h2>

## 🚩 노션 주소

<h2><a href='https://somber-sunset-e11.notion.site/_-_-b96ebb328d044f718f228de869934e0f'>https://somber-sunset-e11.notion.site/_-_-b96ebb328d044f718f228de869934e0f</a></h2>

## 🔮 역할 배분

⚜ 박민주 --- <br/>
- 15(상품 정보 고시) 추가 및 삭제 기능 구현, MUI 라이브러리 구현
- 1, 2, 15-20, header, navbar 마크업

⚜ 윤예나 
- 3번 카테고리 기능 구현 (체크박스 클릭 시 우측에 태그 생성, 태그 클릭 시 해당된 체크박스 해제, 체크박스 클릭 시 우측의 태그 해제) 
- common 폴더의 공통 뷰 컴포넌트 작성 (Grid, Button, Input 등)
- 16~20번 토글 스위치 버튼 구현 (common 폴더의 Switch.js)
<br/>
⚜ 안병진 --- <br/>
⚜ 이지용
- 4번. 필터 태그 기능
  - input focus 시 모든 태그 View
  - 검색 글자에 매칭되는 태그 View
  - 선택된 태그 View
    - 중복태그 추가 x
    - 선택된 태그 삭제 기능
- 5번. 상품명, 상품 코드
  - uuid를 이용한 고유한 상품 코드 생성
- 6번. 상품 구성 소개 정보
- 9번. 상품 총 재고<br/>

## 🧶 설치 및 시작하는 법

```
설치
npm run build

시작
npm run start
```

## 📁 디렉토리 구조

```
.
├── App.jsx
├── assets
│   └── deleteIcon.png	// x 버튼 이미지
├── common
│   ├── Button.js	// Button styled 컴포넌트
│   ├── Checkbox.js	// Checkbox styled 컴포넌트
│   ├── Grid.js		// Grid styled 컴포넌트
│   ├── Input.js	// Input styled 컴포넌트
│   ├── Switch.js	// Switch styled 컴포넌트
│   ├── Text.js		// Text styled 컴포넌트
│   └── index.js
├── components		// 프로젝트 구성 컴포넌트
│   ├── Category.js
│   ├── FilterTag
│   │   ├── FilterTag.js
│   │   ├── SearchTag.js
│   │   └── SelectedTag.js
│   ├── Header.js
│   ├── ImageUpload.js
│   ├── Layout.js
│   ├── Navbar.js
│   ├── ProductImage.js
│   ├── ProductInfo.js
│   ├── ProductNoticeInfo
│   │   ├── NoticeInfo.js
│   │   ├── OfferThankCard.js
│   │   ├── ProductOptionToggle.js
│   │   ├── ProductShppingSetting.js
│   │   ├── SaveMileage.js
│   │   └── index.js
│   ├── ProductPeriod.js
│   ├── ProductRest.js
│   ├── Sidebar.js
│   ├── SubHeader.js
│   └── index.js
├── index.js
├── pages		// 프로젝트 구성 페이지
│   ├── BasicInfo.js
│   ├── ProductImage.js
│   ├── ProductNoticeInfo.js
│   ├── ProductOption.js
│   ├── ProductsPeriodSetting.js
│   └── index.js
├── styles
│   ├── App.css		// css 초기 설정
│   └── palette.js	// 색 설정 값
└── utils
    ├── categoryData.js			// category Data 자료
    ├── pickers
    │   ├── DatePicker.js
    │   └── DateRangePicker.js
    └── tagData.js			// filter tag Data 자료
```

### 🛶 문제 해결 로그
#### 문제
팀원들과 작업 화면을 공유하는 과정에서 컴포넌트 박스 구현 시 px로 하면 
모니터 크기마다 보이는 뷰가 매우 달라지는 현상을 발견하였습니다.

#### 해결
px 대신 rem 개념을 사용하여 최상위 root 태그의 font-size를
모니터 크기별로 반응형으로 적용하였습니다. (App.css에 작성)

```jsx
// App.css

#root {
  font-size: 16px; // root에서 font-size를 지정하였습니다.
}

// 미디어 쿼리를 통해 서로 다른 모니터 크기에 따라 root의 font-size가 다르게 적용되도록 하였습니다.
@media screen and (max-width: 1500px) {
  #root {
    font-size: 18px;
  }
}
@media screen and (max-width: 2550px) {
  #root {
    font-size: 20px;
  }
}

// 예: width를 40rem이라고 하면 각 모니터에 적용된 font-size에 따라 width의 전체 px 값이 결정됨
```
