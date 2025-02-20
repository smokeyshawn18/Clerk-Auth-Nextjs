"use client";

import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import pp from "../../public/pp.jpg";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-700 text-white p-6">
      <div className="bg-slate-800 p-6 rounded-2xl shadow-lg w-full max-w-lg text-center">
        <Image
          src={pp} // Replace with your profile image
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-400"
        />
        <h1 className="text-2xl font-bold">Shudarsan Poudel</h1>
        <p className="text-gray-300 mt-2 font-bold">
          Web Developer | MERN | NextJs | Tailwind | NodeJs | Enthusiast
        </p>

        <div className="mt-4 space-y-3">
          <Link
            href="https://github.com/smokeyshawn18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition"
          >
            <FaGithub size={20} /> GitHub
          </Link>

          <Link
            href="https://www.instagram.com/shudarsan25/"
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
          >
            <FaInstagram size={20} /> Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
