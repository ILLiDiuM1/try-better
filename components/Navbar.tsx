"use client";
import { useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  name: string;
  links: NavLink[];
  darkMode: boolean;
};

export function Navbar({ name, links, darkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`flex items-center justify-between ${
    darkMode ? "text-black" : "text-white"
  }`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg border px-3 py-1 text-sm md:hidden"
        >
        Menu
      </button>
      <p className="text-lg font-bold">{name}</p>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col gap-4 text-sm text-gray-600 md:flex md:flex-row ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
            
        >
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}