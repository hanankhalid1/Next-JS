"use client";
import React from "react";
import Navbar from "@/app/component/Navbar/navbar";
import { client } from "@/app/config/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Footer from "@/app/component/footer/footer";
// Fetchinf Blog data from CMS
const fetchBlogData = async () => {
  let blogData = await client.getEntries({ content_type: "blog" });
  // Map the retrieved data to a new format
  const data = blogData.items.map((item: any) => {
    return {
      title: item.fields.title,
      description: documentToReactComponents(item.fields.description),
      id: item.fields.id,
      image: item.fields.pic.fields.file.url,
      slug: item.fields.slug, // Add slug mapping
      detail: item.fields.detail,
    };
  });
  // Return the transformed data
  return data;
};

export default async function Blogs({ params }: any) {
  const data = await fetchBlogData();
  // comparing the required blog within the list of blogs using slug (dynamic routing)
  const post: any = data.find((p: any) => p.slug === params.slug);

  if (!post) {
    return (
      <div>
        {/* // Navbar Component */}
        <Navbar />
        {/* Show error if not have any blog  with this link! */}

        <p className="text-4xl font-serif font-bold text-center">
          Blog not found
        </p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {/* // Show Blog Details */}

      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
        <div className="text-gray-500 mb-2">Blog ID: {post.id}</div>
        <div className="w-full max-w-screen-lg bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover object-center"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-8">{post.detail}</p>
          </div>
        </div>
      </section>

      {/* //Footer component */}

      <Footer />
    </div>
  );
}
