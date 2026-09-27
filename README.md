# claude-code-vide-test

여러 개의 작은 독립형 정적 웹 페이지 예제 모음입니다. 빌드 시스템, 패키지 매니저, 번들러, 린터, 테스트 스위트가 없으며, 각 하위 폴더는 서로 의존성이 없는 순수 HTML/CSS/JS 파일로 구성되어 있습니다.

## 실행 방법

별도의 빌드/린트/테스트 명령이 필요 없습니다. 각 폴더의 `index.html`을 브라우저에서 직접 열거나, 간단한 로컬 서버 또는 에디터의 라이브 프리뷰 기능을 사용하면 됩니다.

## 폴더 구성

- `hello-world/` — 기본 HTML/CSS 페이지 (`index.html`, `style.css`)
- `profile/` — 자기소개 카드 페이지 (`index.html`, `style.css`, `main.js`)
- `JS/` — JavaScript 예제 페이지 (`index.html`, `style.css`, `main.js`)
- `excha/` — 환율 변환기 (`index.html`, `style.css`, `main.js`). USD, EUR, KRW, JPY 통화 간 변환을 지원하며 [exchangerate-api.com](https://api.exchangerate-api.com) API를 사용합니다.
- `myexcha/` — 환율 변환기 (`excha/`와 동일한 구성)

새 폴더를 추가할 때도 동일한 패턴을 따릅니다: 마크업은 `index.html`, 스타일은 `style.css`, 필요 시 동작은 `main.js`에 작성하고 `</body>` 앞에 `<script src="main.js"></script>` 태그로 연결합니다.
