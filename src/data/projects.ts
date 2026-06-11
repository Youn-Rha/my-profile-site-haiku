import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "포트폴리오 스타터킷",
    description: "Next.js 15 + Tailwind CSS v4 + shadcn/ui로 만든 포트폴리오 템플릿",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/your-name/portfolio",
    demoUrl: "https://your-portfolio.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "프로젝트 이름",
    description: "프로젝트에 대한 간단한 설명을 여기에 작성합니다.",
    tags: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/your-name/project",
  },
  {
    id: "3",
    title: "다른 프로젝트",
    description: "또 다른 프로젝트의 간단한 설명입니다.",
    tags: ["TypeScript", "API", "Tailwind CSS"],
    githubUrl: "https://github.com/your-name/another-project",
    demoUrl: "https://example.com",
  },
];
