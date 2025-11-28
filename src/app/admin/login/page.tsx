"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mountain } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would implement Firebase Auth login
        // For now, we'll just redirect to the admin dashboard
        router.push('/admin');
    }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary p-4">
      <Card className="w-full max-w-sm mx-auto shadow-2xl">
        <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
                <Mountain className="h-8 w-8 text-primary" />
            </div>
          <CardTitle className="text-2xl font-bold font-headline">Admin Login</CardTitle>
          <CardDescription>Masuk untuk mengelola konten website</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="admin@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
