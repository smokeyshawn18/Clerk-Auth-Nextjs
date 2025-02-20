import Image from "next/image";
import Link from "next/link";

import Logo from "../public/next.svg";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-6 min-h-screen bg-gray-900 text-white px-6">
        {/* Hero Section */}
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
            Welcome to Clerk Authentication Demo
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Secure and seamless authentication for your Next.js applications.
          </p>

          {/* Call to Action */}
          <Link
            href="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Hero Image */}
        <div className="mt-2">
          <Image
            src={Logo}
            alt="Authentication Illustration"
            className="rounded-lg shadow-lg w-80 h-80"
            priority
          />
        </div>
      </div>
    </>
  );
}
