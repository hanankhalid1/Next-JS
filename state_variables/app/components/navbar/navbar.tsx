import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-indigo-600  text-light p-4">
        <ul className="flex justify-around text-2xl">
          <li  >
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/student">Students</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
