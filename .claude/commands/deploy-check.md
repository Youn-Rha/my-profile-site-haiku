# Pre-Deployment Verification & Push

GitHub에 배포하기 전에 포트폴리오 코드를 검증하고 자동으로 푸시합니다.

## 검증 단계

### 1. Lint 검사
- `npm run lint` 실행
- ESLint 오류 발견 시 자동으로 수정 후 재실행

### 2. 빌드 검증
- `npm run build` 실행
- TypeScript 타입 체크 포함
- 빌드 오류 발견 시 원인 파악 및 수정

### 3. Git 상태 확인
- 변경사항이 있는지 확인
- 있으면 자동으로 커밋 생성

### 4. GitHub 푸시
- `git push origin main` 실행
- 푸시 완료 후 결과 요약 출력

## 예상 결과

✅ **성공 시**
```
[deploy-check] Lint: PASS
[deploy-check] Build: PASS
[deploy-check] Git: No changes
[deploy-check] Push: SUCCESS
[deploy-check] GitHub URL: https://github.com/Youn-Rha/my-profile-site-haiku
```

❌ **실패 시**
```
[deploy-check] Lint: FAIL
[ERROR] ESLint errors found and auto-fixed
[retry] Re-running lint...
```

## 주의사항

- 빌드 오류가 있으면 자동으로 코드를 수정하려고 시도합니다
- 수정 후에도 오류가 나면 사용자에게 알립니다
- 푸시 전에 모든 변경사항이 커밋되어야 합니다
- 원격 저장소는 `origin/main`으로 고정됩니다

## 사용 예시

포트폴리오를 수정한 후 배포하고 싶을 때:
```
/deploy-check
```

명령 한 번으로 다음이 자동으로 처리됩니다:
1. 코드 검사 (lint)
2. 타입 검사 및 빌드
3. 커밋 생성
4. GitHub 푸시
