import { getPayload } from "@/lib/payload";
import Image from "next/image";
import Link from "next/link";

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const Posts = async () => {
  const payload = await getPayload();
  const posts = await payload.find({
    collection: "posts",
    limit: 10,
    where: {
      includedInBlog: {
        equals: true,
      },
    },
    depth: 1,
  });

  return (
    <section id="blog" className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {posts.docs.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="group block border border-primary-500 p-8 rounded-xl transition-all duration-300 hover:bg-primary-500 hover:rounded-2xl"
          >
            <Image
              src={post.banner?.url || "/placeholder.svg"}
              alt={post.banner?.alt || "/Banner"}
              width={1280}
              height={720}
              className="group-hover:scale-105 mx-auto rounded-xl md:w-full md:h-[170px] object-cover transition"
            />
            <article className="items-center justify-center">
              <h3 className="text-lg md:text-2xl py-3 font-semibold text-primary-400 group-hover:text-white transition-colors duration-300">
                {post.title}
              </h3>
              <time className="text-slate-400 group-hover:text-white text-sm">
                {formatDate(post.createdAt)}
              </time>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Posts;
