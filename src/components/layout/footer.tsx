import Link from "next/link";
import { Mountain, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Mountain className="h-7 w-7 text-primary" />
            <span className="font-headline">Kecamatan sosoh buay rayap kab. OKU</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Desa digital yang maju, mandiri, dan sejahtera.
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold">Navigasi</h4>
          <Link href="/profil" className="text-sm hover:text-primary">Profil Desa</Link>
          <Link href="/berita" className="text-sm hover:text-primary">Berita</Link>
          <Link href="/potensi" className="text-sm hover:text-primary">Potensi</Link>
          <Link href="/galeri" className="text-sm hover:text-primary">Galeri</Link>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold">Kontak Kami</h4>
          <p className="text-sm">Kantor Desa BANDAR Kec.Sosoh Buay Rayap Kab.OKU</p>
          <p className="text-sm">Jl. Raya Bandar No. 1, 53123</p>
          <p className="text-sm">Email: kontak@bandar.desa.id</p>
          <p className="text-sm">Telp: (0281) 123-456</p>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold">Ikuti Kami</h4>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-primary" /></Link>
            <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-primary" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-primary" /></Link>
          </div>
        </div>
      </div>
      <div className="border-t bg-background">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 py-4 text-sm text-muted-foreground md:flex-row md:px-6">
          <p>&copy; {currentYear} Desa BANDAR Kec.Sosoh Buay Rayap Kab.OKU. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/admin/login" className="hover:text-primary">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
