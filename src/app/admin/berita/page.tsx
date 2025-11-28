import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import BeritaTable from "@/components/admin/berita/berita-table";
import { newsArticles } from "@/lib/data";

export default function AdminBeritaPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">Manajemen Berita</h1>
        <Button asChild>
          <Link href="/admin/berita/tambah">
            <PlusCircle className="h-4 w-4 mr-2" />
            Tambah Berita Baru
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Artikel Berita</CardTitle>
          <CardDescription>Kelola artikel berita yang ditampilkan di website.</CardDescription>
        </CardHeader>
        <CardContent>
          <BeritaTable articles={newsArticles} />
        </CardContent>
      </Card>
    </>
  );
}
