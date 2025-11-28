import Link from "next/link";
import Image from "next/image";
import { newsArticles } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function BeritaPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Arsip Berita</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Kumpulan berita dan informasi terkini seputar kegiatan dan perkembangan di Desa Bandar Kec.Sosoh Buay Rayap Kab.OKU.
          </p>
        </header>
        
        <main className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => {
            const articleImage = PlaceHolderImages.find(img => img.id === article.imageId);
            return (
              <Card key={article.id} className="bg-card flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Link href={`/berita/${article.slug}`} className="block">
                    {articleImage && (
                      <Image
                        src={articleImage.imageUrl}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover"
                        data-ai-hint={articleImage.imageHint}
                      />
                    )}
                  </Link>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <Badge variant="outline" className="mb-2 w-fit">{format(new Date(article.publishedAt), 'dd MMMM yyyy', { locale: id })}</Badge>
                  <CardTitle className="mb-2 text-xl font-bold line-clamp-2">
                    <Link href={`/berita/${article.slug}`} className="hover:text-primary transition-colors">
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3 flex-grow">{article.excerpt}</CardDescription>
                  <Link href={`/berita/${article.slug}`} className="text-sm font-semibold text-primary hover:underline mt-4 self-start">
                    Baca Selengkapnya <ArrowRight className="inline h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </main>
      </div>
    </div>
  );
}
