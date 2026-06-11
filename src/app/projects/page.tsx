import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "My projects",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-muted-foreground">직접 만든 프로젝트 목록입니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                {project.featured && <Badge>Featured</Badge>}
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-3">
              <p className="text-muted-foreground text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <Code2 className="mr-1 h-3 w-3" /> GitHub
                  </Link>
                </Button>
              )}
              {project.demoUrl && (
                <Button size="sm" asChild>
                  <Link href={project.demoUrl} target="_blank">
                    <ExternalLink className="mr-1 h-3 w-3" /> Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
