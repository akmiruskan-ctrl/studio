"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Newspaper, LayoutDashboard } from 'lucide-react';

const adminNavLinks = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/berita', label: 'Berita', icon: Newspaper },
];

export default function AdminNav() {
    const pathname = usePathname();
    return (
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {adminNavLinks.map(link => (
            <Link
                key={link.href}
                href={link.href}
                className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                (pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href))) && 'bg-muted text-primary'
                )}
            >
                <link.icon className="h-4 w-4" />
                {link.label}
            </Link>
            ))}
        </nav>
    );
}
