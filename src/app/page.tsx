import { Hero } from "@/components/pages/home/hero";
import { LatestNews } from "@/components/pages/home/latest-news";
import { VillagePotentialPreview } from "@/components/pages/home/village-potential-preview";
import { GalleryPreview } from "@/components/pages/home/gallery-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestNews />
      <VillagePotentialPreview />
      <GalleryPreview />
    </>
  );
}
