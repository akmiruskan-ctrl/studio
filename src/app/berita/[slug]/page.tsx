import { notFound } from 'next/navigation';
import Image from 'next/image';
import { newsArticles, type NewsArticle } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

function getArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export default function BeritaDetailPage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const articleImage = PlaceHolderImages.find(img => img.id === article.imageId);

  return (
    <article className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">{article.title}</h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{format(new Date(article.publishedAt), 'EEEE, dd MMMM yyyy', { locale: id })}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Oleh: {article.author}</span>
          </div>
        </div>
      </header>
      
      {articleImage && (
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
          <Image
            src={articleImage.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            data-ai-hint={articleImage.imageHint}
            priority
          />
        </div>
      )}

      <div
        className="space-y-6 text-lg text-muted-foreground"
      >
        <div
          className="[&_p]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_h2]:font-headline [&_h2]:mt-8 [&_h2]:mb-3 [&_a]:text-primary [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </article>
  );
}
