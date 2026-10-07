"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Prasiddhi", href: "/prasiddhi" },
    { name: "Contact", href: "/contact" }, 
  ];

  const toggleTheme = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="relative sticky top-0 z-50 w-full border border-(--surface) bg-(--surface) shadow-sm">
      {/* Main Navbar */}
      <div className="flex items-center px-4 py-3 lg:px-6 lg:py-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="flex items-center"
        >
          <div className="h-[45px] w-[150px] overflow-hidden">
            <Image
              src="/logo.png"
              alt="Prasiddhi Solutions"
              width={150}
              height={60}
              className="h-auto w-[150px] object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden items-center gap-6 lg:flex">
          {navItems.map((el) => (
            <Link
              key={el.name}
              href={el.href}
              onClick={
                el.name === "Home"
                  ? () =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                  : undefined
              }
              className="text-sm font-medium text-(--muted) transition-colors hover:text-(--primary)"
            >
              {el.name}
            </Link>
          ))}
        </div>

        {/* Desktop Search + Theme + CTA */}
        <div className="ml-6 hidden items-center gap-4 lg:flex">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-40 rounded-lg border border-(--border) bg-(--surface) px-3 py-1.5 pr-9 text-xs text-foreground outline-none hover:bg-(--surface-alt)"
            />

            <Search
              size={15}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-(--muted)"
            />
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--border) text-(--muted) transition-all duration-300 hover:bg-(--surface-alt) hover:text-(--primary)"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA */}
          <Link
            href="/contact"
            className="rounded-lg bg-(--primary) px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-(--primary-dark)"
          >
            Prasiddhi Solutions
          </Link>
        </div>

        {/* Mobile Search */}
        <button type="button" className="ml-auto p-2 lg:hidden">
          <Search size={19} />
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="p-2 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-(--border) bg-(--surface) transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                setIsMenuOpen(false);

                if (item.name === "Home") {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
              }}
              className="text-sm font-medium text-(--muted) transition-colors hover:text-(--primary)"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-3 text-left text-sm font-medium text-(--muted) transition-colors hover:text-(--primary)"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}

            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
