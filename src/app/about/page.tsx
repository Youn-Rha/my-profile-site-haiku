import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "자기소개 페이지",
};

const techStack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "PostgreSQL"],
  Tools: ["Git", "Docker", "Figma", "VS Code"],
};

const experiences = [
  {
    company: "ABC 회사",
    role: "Frontend Developer",
    period: "2023.01 - 현재",
    desc: "React, Next.js 기반 웹 서비스 개발 및 유지보수",
  },
  {
    company: "XYZ 스타트업",
    role: "Web Developer",
    period: "2021.06 - 2022.12",
    desc: "사내 관리 시스템 개발 및 UI/UX 개선",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* 소개 */}
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          사용자 경험을 중심으로 생각하는 프론트엔드 개발자 홍길동입니다.
          복잡한 문제를 단순하고 우아하게 해결하는 것을 즐기며,
          팀과의 협업을 통해 더 나은 제품을 만들어가는 과정을 좋아합니다.
        </p>
      </section>

      <Separator />

      {/* 기술 스택 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, techs]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-base">{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* 경력 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <Card key={exp.company}>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-lg">{exp.role}</p>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <Badge variant="outline">{exp.period}</Badge>
                </div>
                <p className="mt-3 text-muted-foreground">{exp.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
