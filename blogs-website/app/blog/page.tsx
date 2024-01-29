"use client";
import React from "react";
import Navbar from "../component/Navbar/navbar";
import { client } from "../config/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import Footer from "../component/footer/footer";

// Fetching data from CMS
const fetchBlogData = async () => {
  let blogData = await client.getEntries({ content_type: "blog" });
  // Map the retrieved data to a new format
  const data = blogData.items.map((item: any) => {
    return {
      title: item.fields.title,
      description: documentToReactComponents(item.fields.description),
      id: item.fields.id,
      image: item.fields.pic.fields.file.url,
      slug: item.fields.slug,
      detail: item.fields.detail,
    };
  });
  // Return the transformed data
  return data;
};

export default async function Blogs() {
  const data = await fetchBlogData();

  return (
    <div>
      <Navbar />
      <div>
        <div className="text-center my-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Main Blogs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {data.map((item: any) => (
            <div
              key={item.id}
              className="overflow-hidden border-2 border-gray-200 rounded-md shadow-md"
            >
              <div className="bg-white p-6 h-full">
                <Link href={`/blog/${item.slug}`}>
                  <div className="h-full">
                    <img
                      src={item.image}
                      alt="Item Pic"
                      className="mb-4 h-32 w-full object-cover object-center rounded-t-md"
                    />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <span className="text-gray-500">{item.id}</span> <br />
                    <Link
                      href={`/blog/${item.slug}`}
                      className="text-blue-600 hover:underline focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                    >
                      Read More...
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
