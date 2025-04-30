export const Media = {
  slug: "media", // Slug untuk endpoint API: /api/media
  upload: {
    staticURL: "/media", // URL untuk mengakses file yang di-upload
    staticDir: "media", // Folder tempat menyimpan file (dalam project)
    mimeTypes: ["image/png", "image/jpeg", "image/webp"], // Jenis file yang diizinkan
    imageSizes: [
      {
        name: "card",
        width: 1280,
        height: 720,
      },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alternative Text",
    },
  ],
};
