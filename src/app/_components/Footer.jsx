// src/app/_components/Footer.jsx
import React from "react";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 mt-20">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-400">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <p className="font-mono text-neutral-300">
              © {new Date().getFullYear()} Thomas Bérubé
            </p>
            <p className="text-neutral-500">
              Backend Web Developer
            </p>
          </div>

          <Contact />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
