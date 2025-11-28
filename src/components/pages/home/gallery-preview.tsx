import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export function GalleryPreview() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-')).slice(0, 6);

  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Galeri Desa</h2>
          <p className="mt-2 text-lg text-muted-foreground">Momen dan keindahan yang tertangkap kamera.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={image.id} className={`relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group
              ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              ${index > 4 ? 'hidden sm:block' : ''}
            `}>
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild>
                <Link href="/galeri">Lihat Galeri Lengkap <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
