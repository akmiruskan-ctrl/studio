import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import Link from 'next/link';
import { Newspaper, LayoutDashboard, Mountain, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import AdminNav from '@/components/admin/admin-nav';
import { Toaster } from '@/components/ui/toaster';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Admin - Desa Bandar',
  description: 'Admin panel for Desa Bandar website',
  robots: {
    index: false,
    follow: false,
    nocache: true
  }
};

function AdminSidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-headline">Kecamatan sosoh buay rayap kab. OKU</span>
          </Link>
        </div>
        <div className="flex-1">
          <AdminNav />
        </div>
        <div className="mt-auto p-4">
          <Link
            href="/admin/login"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background">
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <AdminSidebar />
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <nav className="grid gap-2 text-lg font-medium">
                    <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
                      <Mountain className="h-6 w-6 text-primary" />
                      <span className="font-headline">Kecamatan sosoh buay rayap kab. OKU</span>
                    </Link>
                    <AdminNav />
                  </nav>
                  <div className="mt-auto">
                     <Link
                        href="/admin/login"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </Link>
                  </div>
                </SheetContent>
              </Sheet>
              <div className="w-full flex-1">
                <h1 className="font-semibold text-lg">Admin Panel</h1>
              </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-secondary/40">
              <Suspense fallback={<div>Loading...</div>}>
                {children}
              </Suspense>
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
