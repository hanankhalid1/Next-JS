import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-6 text-black dark:bg-slate-500 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <ul className="flex space-x-4 justify-center items-center text-white">
        <li>
            <Link href="/" className="text-white hover:text-gray-300">
           Home
            </Link>
          </li>
          <li>
            <Link href="/sign-in" className="text-white hover:text-gray-300">
              Sign-In
            </Link>
          </li>
          <li>
            <Link href="/signup" className="text-white hover:text-gray-300">
           Sign-Up
            </Link>
          </li>
        </ul>
      
      </div>
    </nav>
  );
};

export default Navbar;
