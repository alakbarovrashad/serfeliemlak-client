"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-lg">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-8 text-center space-y-6">
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Logo className="hidden" />
              </div>
            </div>

            <h1 className="text-6xl font-bold tracking-tight">404</h1>
            <p className="text-lg text-muted-foreground">
              Axtardığınız səhifə tapılmadı
            </p>

            {/* Description */}
            <p className="text-muted-foreground">
              Səhifə köçürülmüş, silinmiş və ya səhv linkə klikləmiş ola
              bilərsiniz.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button asChild className="rounded-xl main-button">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Ana Səhifə
                </Link>
              </Button>
              <Button
                variant="outline"
                onClick={() => router.back()}
                className="rounded-xl"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Geri Dön
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
