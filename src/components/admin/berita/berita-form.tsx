"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type NewsArticle } from "@/lib/data";
import { newsArticleSchema } from "@/lib/schemas";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";

type BeritaFormProps = {
  article?: NewsArticle;
};

export function BeritaForm({ article }: BeritaFormProps) {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof newsArticleSchema>>({
    resolver: zodResolver(newsArticleSchema),
    defaultValues: {
      title: article?.title || "",
      content: article?.content.replace(/<p>/g, '').replace(/<\/p>/g, '\n\n').trim() || "",
    },
  });

  function onSubmit(values: z.infer<typeof newsArticleSchema>) {
    // Here you would implement your logic to save data to Firestore,
    // including handling image uploads to Firebase Storage.

    toast({
      title: `Artikel ${article ? 'Diperbarui' : 'Disimpan'}`,
      description: `Artikel berita "${values.title}" telah berhasil ${article ? 'diperbarui' : 'disimpan'}.`,
    });
    // Redirect back to the news list page after submission
    router.push('/admin/berita');
    router.refresh(); // To see the new data
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Judul Artikel</FormLabel>
              <FormControl>
                <Input placeholder="Judul berita yang menarik" {...field} />
              </FormControl>
              <FormDescription>
                Judul akan ditampilkan sebagai tajuk utama berita.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Konten Artikel</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tulis isi lengkap artikel di sini..."
                  className="min-h-48"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Anda bisa menulis beberapa paragraf. Biarkan satu baris kosong untuk membuat paragraf baru.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gambar Utama</FormLabel>
              <FormControl>
                <div className="flex items-center gap-4">
                  <Input type="file" className="hidden" id="file-upload" {...field} />
                   <label htmlFor="file-upload" className="cursor-pointer">
                    <Button type="button" variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Pilih Gambar
                    </Button>
                  </label>
                  <p className="text-sm text-muted-foreground">Belum ada file dipilih.</p>
                </div>
              </FormControl>
               <FormDescription>
                Pilih gambar yang akan menjadi thumbnail dan gambar utama artikel.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{article ? "Simpan Perubahan" : "Publikasikan Artikel"}</Button>
      </form>
    </Form>
  );
}
