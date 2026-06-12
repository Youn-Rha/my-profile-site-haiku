# Add Project to Portfolio

포트폴리오에 새로운 프로젝트를 추가합니다.

## 프로젝트 정보 입력

다음 정보를 제공해주세요 (필수 항목: 제목, 설명):

- **제목**: 프로젝트 이름
- **설명**: 한 줄 설명
- **기술 태그**: 쉼표로 구분 (예: React, TypeScript, Tailwind CSS)
- **GitHub URL**: GitHub 저장소 링크 (선택사항)
- **Demo URL**: 라이브 데모 링크 (선택사항)
- **Featured**: 홈페이지에 강조 표시 여부 (true/false, 기본값: false)

## 작업 흐름

1. `src/data/projects.ts` 파일을 읽어 현재 프로젝트 목록 확인
2. 새 프로젝트 항목 추가 (id는 기존 최대값 + 1)
3. 파일 저장 후 변경사항 확인
4. `feat: add project - [프로젝트명]` 메시지로 git commit

## 예시

```
제목: 쇼핑몰 웹사이트
설명: Next.js와 Stripe를 사용한 전자상거래 플랫폼
기술: Next.js, TypeScript, Stripe, PostgreSQL, Tailwind CSS
GitHub: https://github.com/myname/shop-website
Demo: https://shop-demo.vercel.app
Featured: true
```
