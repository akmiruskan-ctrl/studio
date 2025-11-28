import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Leaf, TramFront, ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";

const potentials = [
  {
    icon: Leaf,
    title: "Pertanian & Alam",
    description: "Lahan subur dengan pemandangan sawah terasering yang memukau.",
    imageId: "potential-1",
  },
  {
    icon: TramFront,
    title: "Pariwisata",
    description: "Air terjun tersembunyi dan jalur trekking menantang bagi para petualang.",
    imageId: "potential-2",
  },
  {
    icon: ShoppingBasket,
    title: "UMKM & Kerajinan",
    description: "Produk kerajinan tangan unik dan kuliner khas desa yang lezat.",
    imageId: "potential-3",
  },
];

export function VillagePotentialPreview() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Potensi Desa</h2>
          <p className="mt-2 text-lg text-muted-foreground">Temukan kekayaan yang dimiliki Desa Bandar.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {potentials.map((item) => {
            const itemImage = PlaceHolderImages.find(img => img.id === item.imageId);
            return (
              <Card key={item.title} className="text-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  {itemImage && (
                    <Image
                      src={itemImage.imageUrl}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover rounded-t-lg"
                      data-ai-hint={itemImage.imageHint}
                    />
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mb-2 text-xl font-bold">{item.title}</CardTitle>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
            <Button asChild>
                <Link href="/potensi">Jelajahi Potensi Lainnya</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
