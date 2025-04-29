import React from "react";
import Posts from "./components/Posts";

const Page = () => {
  return (
    <div>
      <div>
        <h1 className="flex items-center justify-center font-semibold text-2xl pt-12 mx-auto">
          BLOGS
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Posts />
      </div>
    </div>
  );
};

export default Page;
