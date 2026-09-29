"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const sectionIds = ["home", "about"];

const links = [
  { href: "/#home", label: "Home", sectionId: "home" },
  { href: "/#about", label: "About", sectionId: "about" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link
          href="/#home"
          className="shrink-0 text-base font-semibold sm:text-lg"
        >
          Gloria Li
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="gap-0.5 sm:gap-1">
            {links.map((link) => {
              const active = link.sectionId
                ? pathname === "/" && activeSection === link.sectionId
                : pathname === link.href;
              return (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    active={active}
                    render={<Link href={link.href} />}
                    className={cn(
                      "rounded-full px-2.5 py-1.5 text-xs font-medium bg-muted/60 sm:px-4 sm:py-2 sm:text-sm",
                      active && "bg-muted"
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
