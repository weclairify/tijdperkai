import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GetStartedButton } from "@/components/ui/get-started-button";

const links = [
  { href: "#programma", label: "Programma" },
  { href: "#tools", label: "Tools" },
  { href: "#voor-mij", label: "Voor wie" },
  { href: "#pakketten", label: "Pakketten" },
  { href: "#docent", label: "Docent" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
          TijdperkAI <span className="text-xs font-normal text-muted-foreground">× Weclairify</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <GetStartedButton href="#intake" size="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Plan je gratis intake
          </GetStartedButton>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-muted">
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-sm bg-primary text-primary-foreground">
              <a href="#intake">Plan je gratis intake (20 min)</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
