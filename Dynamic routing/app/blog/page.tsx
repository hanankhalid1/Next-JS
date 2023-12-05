import Link from "next/link";
import Image from "next/image";
interface Item {
  id: number;
  short_description: string;
  long_description: string;
  image: any;
  heading: string;
  url: string;
}
async function fetchData(): Promise<Item[]> {
  const response = await fetch("http://localhost:3000/api", {
    next: {
      revalidate: 60,
    },
  });
  const result = await response.json();
  return result as Item[];
}

export default async function Blogs() {
  const items = await fetchData();
  return (
    <div className="fluid bg-gray-100 w-full h-full">
      <div>
        <ul className="flex justify-around p-5 font-serif text-2xl bg-teal-400">
          <li className="hover:text-teal-800">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-teal-800">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-teal-800">
            <Link href="/">About Us</Link>
          </li>
          <li className="hover:text-teal-800">
            <Link href="/">Contact</Link>
          </li>
          <li className="hover:text-teal-800">
            <Link href="/">Register Now</Link>
          </li>
        </ul>
        <h1 className="text-center text-5xl font-bold font-serif m-4 text-black">
          Blog Website
        </h1>
      </div>
      <div className="flex justify-center">
        <span className="text-red-600 text-3xl m-4 font-semibold font-serif hover:cursor-pointer">
          My All Blogs
        </span>
      </div>
      <div className="text-black grid grid-cols-2 gap-4 ml-10 mt-5">
        {items.map((item) => (
          <div key={item.id}>
            <div>
              <Image
                src={item.image}
                alt="blog"
                width={"300"}
                height={"250"}
                className="m-8"
              />
            </div>
            <div>
              <Link
                href={`/blog/${item.url}`}
                className="font-extrabold text-2xl m-8 hover:underline hover:cursor-pointer"
              >
                {item.heading}
              </Link>
              <p className="ml-8 font-serif">{item.short_description}</p>
              <Link
                href={`/blog/${item.url}`}
                className="text-black m-8 font-serif hover:underline hover:text-red-500 hover:cursor-pointer"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
