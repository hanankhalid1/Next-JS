import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav className="bg-blue-500 p-5">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-white text-3xl font-bold font-serif">
            Blogsify📝
          </span>

          <div className="flex space-x-10">
            <Link href="/" className="text-white hover:">
              Home
            </Link>
            <Link href="/blog" className="text-white">
              Blogs
            </Link>
            <Link href="#" className="text-white">
              About
            </Link>
            <Link href="/" className="text-white">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
