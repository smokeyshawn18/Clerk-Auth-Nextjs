"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname(); // Get current path

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About You", path: "/about" },

    { name: "Let’s Connect", path: "/contact" },
  ];

  return (
    <nav className="bg-sky-300 shadow-lg px-6 py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-black text-2xl font-bold tracking-widest"
        >
          Auth Clerk
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 font-semibold text-lg uppercase">
          {navLinks.map(({ name, path }, index) => (
            <li key={index}>
              <Link
                href={path}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                  pathname === path
                    ? "bg-black text-white" // Active link styling
                    : "text-black hover:text-blue-800"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton>
              <button className="bg-green-500 text-white font-bold px-4 py-2 rounded-lg uppercase tracking-wider hover:bg-green-600 transition-colors duration-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10",
                  userButtonPopoverCard: "bg-gray-800 text-white",
                },
              }}
            />
          </SignedIn>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-800 text-white py-4 space-y-4">
          {navLinks.map(({ name, path }, index) => (
            <li key={index}>
              <Link
                href={path}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                  pathname === path ? "bg-blue-600" : "hover:text-blue-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
