import { z } from "zod";

export const newsArticleSchema = z.object({
  title: z.string().min(10, {
    message: "Judul harus memiliki setidaknya 10 karakter.",
  }).max(150, {
    message: "Judul tidak boleh lebih dari 150 karakter."
  }),
  content: z.string().min(50, {
    message: "Konten berita harus memiliki setidaknya 50 karakter.",
  }),
  // image field can be string (URL) or File object for upload
  image: z.any().optional(),
});
