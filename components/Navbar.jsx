import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Prasiddhi", href: "/prasiddhi" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center border border-(--surface) bg-(--surface) md:px-6 md:py-4 px-3 py-2.5 shadow-sm">
      {/* Logo */}
      <div className="md:text-xl font-bold text-foreground text-medium">
        Prasiddhi <span className="text-(--primary)">Solutions</span>
      </div>

      {/* Navigation */}
      <div className="ml-auto hidden  md:flex items-center gap-6">
        {navItems.map((el) => (
          <Link
            key={el.name}
            href={el.href}
            className="text-sm font-medium text-(--muted) transition-colors hover:text-(--primary)"
          >
            {el.name}
          </Link>
        ))}
      </div>

      {/* Right side */}
      <div className="ml-6 flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-40 rounded-lg border border-(--border) bg-(--surface) px-3 py-2 pr-9 text-sm text-foreground outline-none"
          />

          <Search
            size={17}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-(--muted)"
          />
        </div>

        {/* Button */}
        <Link
          href="/contact"
          className="rounded-lg bg-(--primary) px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-(--primary-dark)"
        >
          Prasiddhi Solutions
        </Link>
      </div>
    </nav>
  );
}
