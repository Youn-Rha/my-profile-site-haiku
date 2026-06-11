import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Code2, Heart, Zap } from "lucide-react";

const skills = ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js"];

export default function HomePage() {
  return (
    <>
      {/* Hero 섹션 */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground font-medium">안녕하세요, 저는</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                홍길동<br />
                <span className="text-primary">Frontend Developer</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-md">
              사용자 경험을 중심으로 생각하는 프론트엔드 개발자입니다.
              아름답고 성능 좋은 웹 애플리케이션을 만듭니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/projects">프로젝트 보기 <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">연락하기</Link>
              </Button>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" asChild title="GitHub">
                <Link href="https://github.com" target="_blank" aria-label="GitHub">
                  <Code2 className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild title="LinkedIn">
                <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                  <Heart className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild title="Email">
                <Link href="mailto:hello@example.com" aria-label="Email">
                  <Zap className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* 프로필 이미지 */}
          <div className="flex-shrink-0">
            <Avatar className="h-48 w-48 md:h-64 md:w-64">
              <AvatarImage src="/profile.jpg" alt="프로필" />
              <AvatarFallback className="text-4xl">홍</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      {/* About 미리보기 섹션 */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-muted-foreground">간단한 자기소개</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "3년+", desc: "개발 경력" },
              { title: "20+", desc: "완성한 프로젝트" },
              { title: "5+", desc: "협업한 팀" },
            ].map((stat) => (
              <Card key={stat.title}>
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl font-bold text-primary">{stat.title}</p>
                  <p className="text-muted-foreground mt-1">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/about">더 알아보기 <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
