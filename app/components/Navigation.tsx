import Link from "next/link";
import { NavLink } from "@/components/ui/navLink";

const navItems = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="flex items-center justify-between py-4">
        <Link href="/" className="text-3xl font-semibold text-black hover:opacity-70 pl-4 sm:pl-6 lg:pl-8">
          ELLA
        </Link>
        <div className="pr-6 sm:pr-8 lg:pr-12">
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden flex items-center gap-4">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} showHover={false}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

