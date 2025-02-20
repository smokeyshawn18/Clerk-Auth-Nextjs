"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { Info } from "lucide-react";
import Image from "next/image";

const About: React.FC = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg font-semibold text-gray-400">
        Loading...
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
        <div className="bg-gray-800 shadow-lg rounded-xl p-6 text-center w-full max-w-md">
          <h2 className="text-2xl font-bold text-red-500">Access Denied</h2>
          <p className="mt-4 text-gray-300">
            Please log in to see the contents of this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <div className="bg-gray-800 shadow-lg rounded-xl p-8 text-center w-full max-w-sm">
        <div className="flex items-center justify-center mb-4">
          <Info className="me-2" />
          <h3 className="text-2xl font-bold tracking-wide">Your Info</h3>
        </div>
        {/* User Avatar */}
        <Image
          src={user.imageUrl}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
        />
        {/* User Details */}
        <h2 className="text-2xl font-bold mt-4">
          {user.firstName} {user.lastName}
        </h2>
        {/* Email */}
        <p className="mt-4 text-gray-300">
          📧 {user.primaryEmailAddress?.emailAddress}
        </p>
      </div>
    </div>
  );
};

export default About;
