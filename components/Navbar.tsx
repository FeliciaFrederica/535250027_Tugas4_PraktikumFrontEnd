"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link
          href="/"
          className="navbar-logo"
          onClick={() => setIsOpen(false)}
        >
          <span className="logo-icon">☁️</span>
          <span className="logo-text">
            Sweet Cloud <span>Café</span>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="navbar-links"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <nav
          id="navbar-links"
          className={`navbar-links ${isOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar-link ${isActive ? "active" : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                {isActive && <span className="active-heart">♥</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}