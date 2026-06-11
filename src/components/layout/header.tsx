import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileNav } from "./mobile-nav";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          포트폴리오
        </Link>

        {/* 데스크탑 내비게이션 */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
            >
              <Link href={link.href} className="text-sm font-medium">
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* 우측 아이콘 */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <MobileNav links={navLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}
