import Link from "next/link";
import { getPayload } from "../../../lib/payload";

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const PostsSection = async () => {
  const payload = await getPayload();
  const posts = await payload.find({
    collection: "posts",
    limit: 2,
    sort: "-updatedAt",
    where: {
      includedInBlog: {
        equals: true,
      },
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-15" id="blog">
      <div className="flex gap-12 sm:gap-24 md:flex-row flex-col">
        <div className="w-72">
          <h2 className="text-4xl font-bold text-light ">
            Latest Blog <br />
          </h2>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-12 ">
          {posts.docs.map((post) => (
            <Link
              href={`/posts/${post.id}`}
              key={post.id}
              className="group block border border-primary-500 p-5 rounded-lg group-hover:bg-primary-500 duration-300 transition-all hover:bg-primary-500"
            >
              <article className="space-y-4">
                <h3 className="texl-lg text-primary-400 md:text-2xl font-semibold text-light group-hover:text-white mb-3 duration-300 transition-all">
                  {post.title}
                </h3>
              </article>
              <div>
                <p className="text-gray-500 group-hover:text-white">
                  Updated At
                </p>
                <time className="text-slate-300 group-hover:text-white">
                  {formatDate(post.updatedAt)}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
