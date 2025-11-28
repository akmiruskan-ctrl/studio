import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Leaf, TramFront, ShoppingBasket, Droplets, Mountain, Sun } from "lucide-react";

const potentials = [
  {
    icon: Leaf,
    title: "Pertanian & Alam",
    description: "Lahan subur dengan pemandangan sawah terasering yang memukau, menghasilkan padi organik berkualitas tinggi.",
    imageId: "potential-1",
  },
  {
    icon: TramFront,
    title: "Pariwisata Alam",
    description: "Air terjun tersembunyi, Curug, dan jalur trekking menantang bagi para petualang di perbukitan sekitar desa.",
    imageId: "potential-2",
  },
  {
    icon: ShoppingBasket,
    title: "UMKM & Kerajinan",
    description: "Produk kerajinan tangan unik dari bambu dan kuliner khas desa seperti opak dan aneka keripik.",
    imageId: "potential-3",
  },
  {
    icon: Droplets,
    title: "Sumber Daya Air",
    description: "Mata air alami yang jernih dimanfaatkan untuk irigasi dan kebutuhan sehari-hari, serta potensi wisata pemandian.",
    imageId: "potential-4",
  },
    {
    icon: Mountain,
    title: "Wisata Budaya",
    description: "Tradisi dan upacara adat yang masih terjaga keasliannya, seperti sedekah bumi dan festival panen tahunan.",
    imageId: "potential-5",
  },
    {
    icon: Sun,
    title: "Energi Terbarukan",
    description: "Potensi pengembangan energi surya dan mikrohidro berkat intensitas matahari yang tinggi dan aliran sungai yang stabil.",
    imageId: "potential-6",
  },
];

export default function PotensiPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Potensi Desa Bandar</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Menjelajahi berbagai kekayaan alam, budaya, dan ekonomi yang menjadi kekuatan dan harapan masa depan Desa Bandar.
        </p>
      </header>
      
      <main className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {potentials.map((item) => {
            const itemImage = PlaceHolderImages.find(img => img.id === item.imageId);
            return (
              <Card key={item.title} className="flex flex-col text-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  {itemImage && (
                    <Image
                      src={itemImage.imageUrl}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                      data-ai-hint={itemImage.imageHint}
                    />
                  )}
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col items-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="mb-2 text-xl font-bold">{item.title}</CardTitle>
                  <CardDescription className="flex-grow">{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </main>
    </div>
  );
}
