import React from "react";
import Posts from "./components/Posts";

const Page = () => {
  return (
    <div>
      <div>
        <h1 className="flex items-center justify-center font-semibold text-2xl">
          BLOGS
        </h1>
      </div>
      <Posts />
    </div>
  );
};

export default Page;
