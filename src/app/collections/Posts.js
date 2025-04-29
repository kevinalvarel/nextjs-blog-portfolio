export const Posts = {
  slug: "posts",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "includedInBlog",
      type: "checkbox",
      defaultValue: true,
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        try {
          const webhookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;
          if (!webhookUrl) {
            console.warn("No Vercel webhook URL set.");
            return;
          }

          await axios.post(webhookUrl);
          console.log("✅ Triggered Vercel redeploy.");
        } catch (err) {
          console.error("❌ Failed to trigger Vercel redeploy:", err);
        }
      },
    ],
  },
};
