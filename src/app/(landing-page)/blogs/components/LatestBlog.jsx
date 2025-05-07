import { getPayload } from "@/lib/payload";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "./ui/CardGradient";

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const LatestBlog = async () => {
  const payload = await getPayload();
  const posts = await payload.find({
    collection: "posts",
    sort: "-createdAt",
    limit: 3,
    where: {
      includedInBlog: {
        equals: true,
      },
    },
    depth: 1,
  });

  return (
    <section id="blog" className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="py-6">
        <h1 className="lg:text-2xl md:text-4xl font-bold">Blog Terbaru</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {posts.docs.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <BackgroundGradient className="group block p-[1px] rounded-2xl transition-all duration-300 hover:rounded-3xl bg-gradient-to-br from-primary-500 to-transparent">
              <div className="bg-gray-900 rounded-[inherit] p-6 md:p-8 transition-all duration-300 min-h-[340px]">
                <Image
                  src={post.banner?.url || "/placeholder.svg"}
                  alt={post.banner?.alt || "Banner"}
                  width={1280}
                  height={720}
                  className="mx-auto rounded-xl md:w-full md:h-[170px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <article className="mt-4">
                  <h3 className="text-lg md:text-2xl font-semibold text-primary-400 group-hover:text-white transition-colors duration-300">
                    {post.title}
                  </h3>
                  <time className="text-slate-400 group-hover:text-white text-sm">
                    {formatDate(post.createdAt)}
                  </time>
                </article>
              </div>
            </BackgroundGradient>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestBlog;
