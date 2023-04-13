# KShoppy


## Getting Started




## Flow

- 로그인하지 않은 유저
  - 제품 상세 페이지는 볼 수 있지만, 카트 추가시 홈으로 리다이렉트 됨


- 로그인한 유저
  - 제품 카트 추가 가능
  - 

- 카트
  - 상품 수량 변경 가능
  - 상품 삭제 가능
  - 상품 총액 + 배송비 = 총가격 구성
  - 주문하기 부분은 X
  - DB 저장을 통해 재로그인 시에도 카트 유지

- Admin 페이지
  - 연필 아이콘
    - 새로운 제품 추가 가능


----

### [Firebase](https://firebase.google.com/)
- 빌드 부터 배포 후까지
- Authentication


```bash
npm install firebase
```

```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlgtHMTmkYt37k6E7zQ313MW-0Ehr8iOg",
  authDomain: "kshoppy-6b683.firebaseapp.com",
  databaseURL: "https://kshoppy-6b683-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kshoppy-6b683",
  storageBucket: "kshoppy-6b683.appspot.com",
  messagingSenderId: "754503952906",
  appId: "1:754503952906:web:f78cec50391f1f3209cdf3",
  measurementId: "G-QZGJXKKSBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

---

### [Cloudinary](https://cloudinary.com/)
- 업로드하면서 트랜스폼 지원
- [Guides](https://cloudinary.com/documentation/cloudinary_guides)
  - [Uploading Assets](https://cloudinary.com/documentation/upload_images)


