import { getPayload } from "@/lib/payload";
import Link from "next/link";

export const dynamic = "force-dynamic";

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
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
  });

  return (
    <section id="blog" className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {posts.docs.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="group block border border-primary-500 p-6 rounded-xl transition-all duration-300 hover:bg-primary-500"
          >
            <article>
              <h3 className="text-lg md:text-2xl font-semibold text-primary-400 group-hover:text-white transition-colors duration-300 mb-2">
                {post.title}
              </h3>
              <time className="text-slate-400 group-hover:text-white text-sm">
                {formatDate(post.updatedAt)}
              </time>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Posts;
