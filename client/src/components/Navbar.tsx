import { Link, useLocation } from "wouter";
import { Menu, X, Rocket } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Jobs", href: "/jobs" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <Rocket className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold font-heading text-primary tracking-tight">
                CareerOrbit<span className="text-accent">.Tech</span>
              </span>
            </a>
          </Link>

          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}>
                  {link.name}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>


      {/* Mobile Nav */}
      {
        isOpen && (
          <div className="md:hidden border-t border-border p-4 bg-background">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className="text-sm font-medium py-2 text-foreground/80 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )
      }
    </nav >
  );
}
