import BlogList from "./components/BlogList";
import LatestBlog from "./components/LatestBlog";

const Posts = async () => {
  return (
    <>
      <LatestBlog />
      <BlogList />
    </>
  );
};

export default Posts;
