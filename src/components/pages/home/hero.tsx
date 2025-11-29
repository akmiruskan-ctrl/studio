import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg mb-4">
          Selamat Datang di Desa BANDAR Kec.Sosoh Buay Rayap Kab.OKU
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md mb-8">
          Menjelajahi keindahan alam, kekayaan budaya, dan potensi luar biasa dari desa kami.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/profil">
            Jelajahi Desa <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
