# Update Profile Information

포트폴리오의 개인정보를 업데이트합니다.

## 수정할 정보

다음 항목 중 수정하고 싶은 것들을 알려주세요:

### 기본 정보
- **이름**: 포트폴리오 소유자 이름
- **직함/직위**: Frontend Developer, Full Stack Engineer 등
- **한 줄 소개**: 자기소개 문구

### 기술 스택
- **Frontend**: React, Vue, Angular 등
- **Backend**: Node.js, Python, Go 등
- **Tools**: Git, Docker, Figma 등

### 경력 정보
- **회사명**: 근무한 회사
- **직책**: 직책명
- **기간**: 근무 기간 (예: 2023.01 - 현재)
- **설명**: 담당 업무 및 성과

### 통계
- **경력**: N년+
- **완성 프로젝트**: N개+
- **협업 팀**: N개+

### 연락처
- **Email**: 이메일 주소
- **GitHub URL**: GitHub 프로필 링크
- **LinkedIn URL**: LinkedIn 프로필 링크

## 수정 대상 파일

- `src/app/page.tsx` - 홈 페이지 (Hero 섹션, 통계 카드)
- `src/app/about/page.tsx` - About 페이지 (자기소개, 기술스택, 경력)
- `src/components/layout/footer.tsx` - 푸터 (연락처 링크)

## 작업 흐름

1. 수정 대상 파일들을 읽어 현재 내용 확인
2. 사용자가 제공한 정보로 선택적 업데이트 (언급하지 않은 항목은 유지)
3. 모든 파일 저장 후 변경사항 확인
4. `chore: update profile information` 메시지로 git commit

## 예시

```
이름: 김개발
직함: Senior Frontend Developer
소개: React와 Next.js를 주력으로 하는 5년차 개발자입니다.

기술스택:
- Frontend: React, Next.js, TypeScript, Tailwind CSS, Redux
- Backend: Node.js, Express, PostgreSQL
- Tools: Git, Docker, AWS

경력:
- ABC 회사, Frontend Lead, 2022.01 - 현재, React 기반 대규모 전자상거래 플랫폼 개발 주도
- XYZ 스타트업, Frontend Developer, 2020.06 - 2021.12, 초기 서비스 MVP 개발

연락처:
- Email: dev@example.com
- GitHub: https://github.com/kimdev
- LinkedIn: https://linkedin.com/in/kimdev
```
