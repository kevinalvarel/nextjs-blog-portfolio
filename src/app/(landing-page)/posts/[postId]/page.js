import { getPayload } from "../../../../lib/payload";
import { RichText as SerializedRichText } from "@payloadcms/richtext-lexical/react";
import Header from "../../blogs/components/Header";

const Page = async ({ params }) => {
  const { postId } = await params;
  const payload = await getPayload();
  let post = await payload.find({
    collection: "posts",
    where: {
      id: {
        equals: postId,
      },
    },
  });

  if (!post) {
    return <div>Post not found</div>;
  }

  let data = post.docs[0];
  console.log(data);

  return (
    <>
      <Header />
      <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-5xl font-bold mb-5 leading-normal text-center">
          {data.title}
        </h1>
        <SerializedRichText className="payload-richtext" data={data.content} />
      </div>
    </>
  );
};

export default Page;
