import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Image as ImageIcon, Users } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Artikel Berita</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">artikel telah dipublikasikan</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Foto Galeri</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">foto dalam galeri</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Potensi Desa</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">potensi unggulan teridentifikasi</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Selamat Datang, Admin!</CardTitle>
        </CardHeader>
        <CardContent>
            <p>Anda berada di panel admin Desa Bandar. Dari sini, Anda dapat mengelola berbagai konten yang ditampilkan di website.</p>
            <p className="mt-2">Gunakan navigasi di sebelah kiri untuk mengakses menu pengelolaan yang tersedia.</p>
        </CardContent>
      </Card>
    </>
  );
}
