import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} 포트폴리오. 모든 권리 보유.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </Link>
          <Link href="mailto:hello@example.com" className="hover:text-foreground transition-colors">
            이메일
          </Link>
        </div>
      </div>
    </footer>
  );
}
