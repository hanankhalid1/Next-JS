import Image from "next/image";
import Link from "next/link";
import Blogs from "./blog/page";

export default function Home() {
  return (
    <div className=" bg-gray-100 min-h-screen">
      <nav>
        <div >
          <div className="text-teal-900 font-serif text-3xl text-center font-bold bg  bg-teal-400">
            InsightVista
          </div>
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
      </nav>
      <div className="flex">
        <div className="flex-1 bg-gray-100 p-4">
          <Image
            width={500}
            height={500}
            src="/img/Main_img.png"
            alt=""
            className=""
          />
        </div>
        <div className="flex-1 text-black p-6 text-2xl">
          <p>
            Website blogs serve as dynamic communication channels, providing
            businesses with a direct link to their audience. Through regular
            updates, companies can share insights, industry trends, and valuable
            information, establishing themselves as thought leaders. This not
            only enhances brand authority but also fosters a sense of community
            among readers. Additionally, blogs contribute to improved SEO,
            driving organic traffic and ensuring a strong online presence in a
            competitive digital landscape.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <h2 className="text-black text-3xl font-semibold font-serif hover:cursor-pointer hover:underline">
          Our Description
        </h2>
      </div>
      <div className="flex-1 text-black p-6 text-2xl">
        <p>
        Website blogs play a pivotal role as indispensable tools for businesses, offering a versatile and comprehensive approach to bolstering their online presence. Beyond the fundamental function of enhancing search engine rankings through consistent updates, blogs become powerful instruments for cultivating credibility and trust among diverse audiences. As businesses share pertinent content, they not only showcase their expertise but also actively engage with their target demographic, fostering a genuine sense of community. This interactive platform serves as a conduit for meaningful connections, creating a dynamic space where businesses and their audience can mutually benefit. Furthermore, blogs emerge as potent marketing assets, capable of not only driving organic traffic but also adeptly converting casual website visitors into devoted and loyal customers. This transformative process contributes significantly to sustained online success, as businesses evolve into authoritative resources within their respective industries. In essence, a well-curated and strategically executed blog becomes more than just a promotional tool—it evolves into a dynamic hub for brand building, audience interaction, and the long-term flourishing of the business in the digital landscape.
        </p>
      </div>
      <footer>
        <div className="bg-slate-800 border-t border-gray-400 shadow text-white">
          <ul className="flex justify-around p-4 text-lg">
            
              <li className="text-white hover:cursor-pointer hover:text-cyan-500 hover:underline">
                Facebook
              </li>
            
              <li className="text-white hover:cursor-pointer hover:text-cyan-500 hover:underline">
                Instagram
              </li>
              <li className="text-white hover:cursor-pointer hover:text-cyan-500 hover:underline">
                Twitter
              </li>
            
              <li className="text-white hover:cursor-pointer hover:text-cyan-500 hover:underline">
                @service
              </li>
          
              <li className="text-white hover:cursor-pointer hover:text-cyan-500 hover:underline">
                sales and growth
              </li>

          </ul>
        </div>
      </footer>
    </div>
  );
}
