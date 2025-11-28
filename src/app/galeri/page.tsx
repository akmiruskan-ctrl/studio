import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function GaleriPage() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Galeri Desa</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Jelajahi keindahan, budaya, dan kehidupan sehari-hari di Desa Bandar melalui koleksi foto kami.
        </p>
      </header>
      
      <main className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((image) => (
          <div key={image.id} className="break-inside-avoid">
            <Card className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={500}
                  height={Math.floor(Math.random() * (600 - 400 + 1)) + 400}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </main>
    </div>
  );
}
