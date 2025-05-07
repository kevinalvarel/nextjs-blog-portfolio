import { getPayload } from "@/lib/payload";
import Image from "next/image";
import Link from "next/link";
import BlogList from "./components/BlogList";
import LatestBlog from "./components/LatestBlog";

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
    <>
      <LatestBlog />
      <BlogList />
    </>
  );
};

export default Posts;
