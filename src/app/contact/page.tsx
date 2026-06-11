"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: 실제 API 연동 (Resend, Nodemailer 등)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("메시지가 전송되었습니다. 곧 연락드리겠습니다!");
    (e.target as HTMLFormElement).reset();
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-muted-foreground">언제든지 연락주세요.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 연락처 정보 */}
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            새로운 기회나 협업 제안, 또는 단순한 안부 인사도 환영합니다.
            메시지를 남겨주시면 최대한 빨리 답변드리겠습니다.
          </p>
          <div className="space-y-3">
            {[
              { icon: Mail, label: "Email", href: "mailto:hello@example.com", text: "hello@example.com" },
              { icon: Github, label: "GitHub", href: "https://github.com", text: "github.com/your-name" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", text: "linkedin.com/in/your-name" },
            ].map(({ icon: Icon, label, href, text }) => (
              <Link key={label} href={href} target="_blank" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Icon className="h-5 w-5" />
                <span className="text-sm">{text}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 문의 폼 */}
        <Card>
          <CardHeader>
            <CardTitle>메시지 보내기</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" name="name" placeholder="홍길동" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" name="email" type="email" placeholder="hello@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">제목</Label>
                <Input id="subject" name="subject" placeholder="문의 제목" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">메시지</Label>
                <Textarea id="message" name="message" placeholder="메시지를 입력하세요..." className="min-h-32" required />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "전송 중..." : "메시지 전송"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
