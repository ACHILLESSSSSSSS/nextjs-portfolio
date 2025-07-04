"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-[#121212] bg-opacity-90 shadow-md">
  <div className="flex items-center justify-between px-8 py-4 w-full">
    {/* Logo */}
    <Link href="/" className="relative inline-block text-4xl font-extrabold text-white">

  <span className="text-cyan-400">E</span>
  <span className="text-white">G</span>
</Link>


    {/* Desktop Nav */}
    <div className="hidden md:flex space-x-8">
      {navLinks.map((link, index) => (
        <NavLink key={index} href={link.path} title={link.title} />
      ))}
    </div>

    {/* Mobile Button */}
    <div className="md:hidden">
      <button
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="p-2 rounded text-slate-200 border border-slate-200 hover:text-white hover:border-white"
      >
        {navbarOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>
    </div>
  </div>

  {/* Mobile Overlay */}
  {navbarOpen && (
    <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />
  )}
</nav>

  );
};

export default Navbar;
