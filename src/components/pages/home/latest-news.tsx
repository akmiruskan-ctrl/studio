import Link from "next/link";
import Image from "next/image";
import { newsArticles } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export function LatestNews() {
  const latestArticles = newsArticles.slice(0, 3);

  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Berita Terkini</h2>
          <p className="mt-2 text-lg text-muted-foreground">Ikuti perkembangan terbaru dari Desa Bandar Asri.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestArticles.map((article) => {
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
        </div>
        <div className="text-center mt-12">
            <Button asChild>
                <Link href="/berita">Lihat Semua Berita</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
