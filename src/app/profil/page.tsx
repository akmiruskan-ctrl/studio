import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Landmark, Map, Users, History } from "lucide-react";

export default function ProfilPage() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-1');
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Profil Desa Bandar Kec.Sosoh Buay Rayap Kab.OKU</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Mengenal lebih dekat Desa Bandar Kec.Sosoh Buay Rayap Kab.OKU, dari sejarah hingga potensi yang dimiliki.
        </p>
      </header>
      
      <main className="space-y-16">
        <Card className="overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center gap-3">
                  <History className="w-8 h-8 text-primary" />
                  <CardTitle className="text-3xl font-headline">Sejarah Desa</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground space-y-4">
                <p>Desa Bandar Kec.Sosoh Buay Rayap Kab.OKU memiliki sejarah panjang yang berakar dari sebuah perkampungan kecil di tepi sungai. Didirikan oleh para perantau pada awal abad ke-19, desa ini tumbuh menjadi pusat perdagangan lokal berkat lokasinya yang strategis.</p>
                <p>Nama "Bandar" sendiri mencerminkan harapan para pendirinya akan sebuah pelabuhan yang ramai. Nilai-nilai gotong royong dan kebersamaan yang diwariskan leluhur masih kental terasa hingga kini, menjadi fondasi utama dalam setiap pembangunan desa.</p>
              </CardContent>
            </div>
            {profileImage && (
              <div className="relative min-h-[300px] md:min-h-full">
                <Image src={profileImage.imageUrl} alt={profileImage.description} fill className="object-cover" data-ai-hint={profileImage.imageHint} />
              </div>
            )}
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Map className="w-7 h-7 text-primary" />
                <CardTitle className="font-headline">Geografi</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Terletak di lembah yang subur, dikelilingi perbukitan hijau. Luas wilayah 500 hektar, dengan sebagian besar adalah lahan pertanian dan perkebunan.
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="w-7 h-7 text-primary" />
                <CardTitle className="font-headline">Demografi</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Jumlah penduduk 2.500 jiwa, terdiri dari 800 kepala keluarga. Mayoritas penduduk bekerja sebagai petani, sisanya pedagang dan pengrajin.
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Landmark className="w-7 h-7 text-primary" />
                <CardTitle className="font-headline">Pemerintahan</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Dipimpin oleh seorang Kepala Desa dan dibantu oleh perangkat desa. Memiliki 3 dusun dan 10 Rukun Tetangga (RT).
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
