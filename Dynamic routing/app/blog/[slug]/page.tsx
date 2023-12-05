import Link from "next/link";
import Image from "next/image";

interface Item {
  id: number; 
  short_description: string;
  long_description: string;
  image: string;
  heading: string;
  url: string;
}

async function fetchData(): Promise<Item[]> {
  const response = await fetch("http://localhost:3000/api");
  const result = await response.json();
  return result as Item[];
}

export default async function Slug({ params }: { params: { slug: string } }) {
  const items = await fetchData();
  const result = items.find((item) => item.url === params.slug);

  return (
    <div>
      {result ? (
        <div className="fluid bg-gray-100 w-full h-full text-black">
          <h1 className="font-extrabold text-3xl ml-12 underline">{result.heading}</h1>
          <Image
            src={result.image}
            alt={result.heading}
            width={500}
            height={200}
            className="mt-5 ml-12"
          />
          <div>
            <span className="font-serif underline font-semibold ml-12">{result.short_description}</span>
          </div>
          <p className="ml-12">{result.long_description}</p>
          <p  className="ml-12">{result.long_description}</p>
        </div>
      ) : (
        <h2>Not Found</h2>
      )}
      <footer>
        <div className="bg-slate-800 border-t border-gray-400 shadow text-white">
          <ul className="flex justify-around p-9 text-lg h-full">
           
              <li className="text-white hover:cursor-pointer hover:text-cyan-500">
                Facebook
              </li>
           
              <li className="text-white hover:cursor-pointer hover:text-cyan-500">
                Instagram
              </li>
          
              <li className="text-white hover:cursor-pointer hover:text-cyan-500">
                Twitter
              </li>
          
           
              <li className="text-white hover:cursor-pointer hover:text-cyan-500">
                @service
              </li>
           
              <li className="text-white hover:cursor-pointer hover:text-cyan-500">
                sales and growth
              </li>
          
          </ul>
        </div>
      </footer>
    </div>
  );
}
