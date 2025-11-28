import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function KontakPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Hubungi Kami</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Kami senang mendengar dari Anda. Silakan hubungi kami melalui informasi di bawah atau kirimkan pesan.
        </p>
      </header>
      
      <main className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Alamat Kantor Desa</h3>
                  <p>Jl. Raya Bandar No. 1, Desa Bandar, Kecamatan Sejahtera, Kabupaten Makmur, 53123</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Telepon</h3>
                  <p>(0281) 123-456</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p>kontak@bandar.desa.id</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Lokasi Kami</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-center p-4">
                <p className="text-muted-foreground">Peta Lokasi Kantor Desa Akan Ditampilkan di Sini</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Kirim Pesan</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Alamat Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subjek</Label>
                <Input id="subject" placeholder="Perihal pesan Anda" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Pesan</Label>
                <Textarea id="message" placeholder="Tuliskan pesan Anda di sini..." rows={5} />
              </div>
              <Button type="submit" className="w-full">Kirim Pesan</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
