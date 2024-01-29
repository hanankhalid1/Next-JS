import Navbar from "./component/Navbar/navbar";
import Link from "next/link";
import Footer from "./component/footer/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto my-8 bg-white p-8 rounded-lg shadow-md">
       <div className="flex justify-center">
       <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Our Mission
        </h1>
       </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to Your Blog, a platform dedicated to sharing valuable
          insights, information, and inspiration. We believe in the power of
          blogging to connect, educate, and inspire people from all walks of
          life.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Whether you're here to stay updated on the latest trends, explore
          in-depth articles on various topics, or simply find a community that
          shares your interests, Your Blog is the place for you.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our team is committed to delivering high-quality content that
          resonates with our readers. Feel free to explore our blog posts,
          engage with the community, and join us on this journey of learning and
          discovery.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our team is dedicated to providing top-notch content that connects
          with our readers. Feel free to explore the wealth of blog posts,
          actively participate in our community, and embark on a journey of
          continuous learning and exploration with us.
        </p>

        <div className="flex items-center space-x-4">
          <Link href="/" className="text-blue-500 hover:underline">
            Explore Blog Posts
          </Link>
          <Link href="/" className="text-blue-500 hover:underline">
            Join the Community
          </Link>
        </div>
      </section>
      <Footer/>
    </>
  );
}
