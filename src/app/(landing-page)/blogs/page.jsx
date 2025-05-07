import BlogList from "./components/BlogList";
import Header from "./components/Header";
import LatestBlog from "./components/LatestBlog";

const Posts = async () => {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <Header />
      <LatestBlog />
      <BlogList />
    </div>
  );
};

export default Posts;
