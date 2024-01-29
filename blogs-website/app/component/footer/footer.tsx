import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="bg-blue-500 text-white p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-bold mb-2">About Us</h3>
              <p className="text-sm">
                Your Blog is dedicated to providing valuable insights and
                fostering a community of learners.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Explore</h3>
              <ul className="list-none text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Connect With Us</h3>
              <ul className="list-none text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
