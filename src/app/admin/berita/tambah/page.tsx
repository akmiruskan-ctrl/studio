import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BeritaForm } from "@/components/admin/berita/berita-form";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TambahBeritaPage() {
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
          Tambah Artikel Berita Baru
        </h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Formulir Artikel Berita</CardTitle>
          <CardDescription>Isi detail artikel berita di bawah ini.</CardDescription>
        </CardHeader>
        <CardContent>
          <BeritaForm />
        </CardContent>
      </Card>
    </>
  );
}
