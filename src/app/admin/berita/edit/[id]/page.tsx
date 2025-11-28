import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BeritaForm } from "@/components/admin/berita/berita-form";
import { newsArticles } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function EditBeritaPage({ params }: { params: { id: string } }) {
  const article = newsArticles.find(a => a.id === params.id);
  
  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="h-7 w-7" asChild>
          <Link href="/admin/berita">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Kembali</span>
          </Link>
        </Button>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0 font-headline">
          Edit Artikel Berita
        </h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Formulir Edit Artikel</CardTitle>
          <CardDescription>Perbarui detail artikel berita di bawah ini.</CardDescription>
        </CardHeader>
        <CardContent>
          <BeritaForm article={article} />
        </CardContent>
      </Card>
    </>
  );
}
