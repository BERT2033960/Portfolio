// src/app/_components/Header.jsx
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="border-b border-neutral-800 bg-neutral-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="font-mono text-lg text-emerald-400">
          ThomasBerube.dev
        </div>

        <nav className="flex gap-6 text-sm text-neutral-300">
          <Link href="/" className="hover:text-emerald-400 transition">
            Accueil
          </Link>
          <Link href="/projet" className="hover:text-emerald-400 transition">
            Projets
          </Link>
          <Link href="/contact" className="hover:text-emerald-400 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
