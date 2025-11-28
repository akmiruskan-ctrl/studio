"use client";

import { useState } from "react";
import Link from "next/link";
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { type NewsArticle } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

type BeritaTableProps = {
  articles: NewsArticle[];
};

export default function BeritaTable({ articles: initialArticles }: BeritaTableProps) {
  const [articles, setArticles] = useState<NewsArticle[]>(initialArticles);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const { toast } = useToast();

  const handleDeleteClick = (articleId: string) => {
    setSelectedArticleId(articleId);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (selectedArticleId) {
      // Here you would call your API to delete the article from Firestore.
      // For this mock, we just filter it out from the local state.
      setArticles(articles.filter(article => article.id !== selectedArticleId));
      toast({
        title: "Artikel Dihapus",
        description: "Artikel berita telah berhasil dihapus.",
      });
      setIsDeleteDialogOpen(false);
      setSelectedArticleId(null);
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Judul</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden md:table-cell">Tanggal Publikasi</TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell className="font-medium">{article.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge variant="outline">Published</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {format(new Date(article.publishedAt), 'dd MMMM yyyy', { locale: id })}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/berita/edit/${article.id}`} className="flex items-center cursor-pointer">
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleDeleteClick(article.id)} className="text-red-600 focus:text-red-600 focus:bg-red-50 flex items-center cursor-pointer">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Hapus
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat diurungkan. Artikel akan dihapus secara permanen dari server.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Hapus
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
