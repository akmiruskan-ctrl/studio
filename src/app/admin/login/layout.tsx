import type { Metadata } from 'next';
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import '../../globals.css';

export const metadata: Metadata = {
  title: 'Login - Admin Desa Bandar Asri',
  description: 'Login page for admin panel of Desa Bandar Asri website',
  robots: {
    index: false,
    follow: false,
    nocache: true
  }
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
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
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
