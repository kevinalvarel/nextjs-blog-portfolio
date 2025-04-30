export const Media = {
  slug: "media", // Slug untuk endpoint API: /api/media
  upload: {
    staticURL: "/media", // URL untuk mengakses file yang di-upload
    staticDir: "media", // Folder tempat menyimpan file (dalam project)
    mimeTypes: ["image/png", "image/jpeg", "image/webp"], // Jenis file yang diizinkan
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alternative Text",
    },
  ],
};
