# Next.js 15 포트폴리오 스타터킷

Next.js 15 + Tailwind CSS v4 + shadcn/ui 기반 포트폴리오 스타터킷

빠르게 포트폴리오를 구축할 때 사용할 수 있는 재사용 가능한 템플릿입니다.

## 기술 스택

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (New York style)
- **Dark Mode**: next-themes
- **Font**: Geist (Next.js 기본 제공)

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

### 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
src/
├── app/
│   ├── about/page.tsx          # About 페이지
│   ├── contact/page.tsx        # Contact 페이지
│   ├── projects/page.tsx       # Projects 페이지
│   ├── globals.css             # 전역 스타일 (Tailwind v4)
│   ├── layout.tsx              # Root 레이아웃 (Header, Footer)
│   └── page.tsx                # 홈 페이지 (Hero + About 미리보기)
├── components/
│   ├── layout/
│   │   ├── header.tsx          # 상단 네비게이션 (반응형)
│   │   ├── footer.tsx          # 하단 풋터
│   │   └── mobile-nav.tsx      # 모바일 네비게이션 (Sheet)
│   ├── providers/
│   │   └── theme-provider.tsx  # next-themes Provider
│   ├── ui/                     # shadcn/ui 컴포넌트
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
├── data/
│   └── projects.ts             # 프로젝트 정적 데이터
├── lib/
│   └── utils.ts                # 유틸리티 (cn 함수)
└── types/
    └── project.ts              # TypeScript 타입
```

## 페이지 구조

| 페이지 | 설명 |
|---|---|
| `/` | 홈 (Hero + About 미리보기 + 통계) |
| `/about` | 자기소개 (기술스택 + 경력) |
| `/projects` | 프로젝트 목록 (카드 그리드) |
| `/contact` | 연락처 (폼 + SNS 링크) |

## 커스터마이징

### 1. 기본 정보 수정

**`src/app/page.tsx`** - 홈 페이지
- 이름: "홍길동"
- 직함: "Frontend Developer"
- 스킬 배지
- SNS 링크

### 2. 프로젝트 데이터 수정

**`src/data/projects.ts`**에서 프로젝트 정보 업데이트

### 3. About 페이지 수정

**`src/app/about/page.tsx`**에서:
- 자기소개 텍스트
- 기술 스택
- 경력 정보

### 4. 연락처 정보 수정

**`src/app/contact/page.tsx`**에서:
- 이메일 주소
- GitHub URL
- LinkedIn URL

## 주요 기능

✨ **다크모드 지원** - next-themes + Tailwind CSS v4
📱 **반응형 디자인** - Desktop/Mobile 최적화
🎨 **shadcn/ui 컴포넌트** - 완전한 UI 컴포넌트 세트
⚡ **고성능** - Turbopack + App Router

## 배포

Vercel에 배포하는 것을 권장합니다:

```bash
npx vercel deploy
```

또는 GitHub와 연결하면 자동 배포 가능.

## 라이선스

MIT
