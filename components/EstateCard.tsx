"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Heart, MapPin, Calendar, BedDouble, Layers } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EstateCard = () => {
  const images: string[] = [
    "/images/property/property1.jpg",
    "/images/property/property2.jpg",
    "/images/property/property3.jpg",
    "/images/property/property4.jpg",
    "/images/property/property5.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (hovered && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 1500);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [hovered, images.length]);
  return (
    <Card className="group overflow-hidden rounded-md shadow-sm transition hover:shadow-lg py-0 gap-3">
      <div
        className="relative h-40 w-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setIndex(0);
        }}
      >
        <Image
          src={images[index]}
          alt="Emlak"
          fill
          priority={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          className="object-cover transition-transform duration-500"
        />
        <div className="absolute top-3 flex items-center justify-between w-full px-3">
          <span className="rounded-md bg-main px-3 py-1 text-xs text-white">
            Satılır
          </span>
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full backdrop-blur"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="space-y-3 pt-0 px-4">
        {/* Price */}
        <div className="text-2xl font-bold mb-1">₺ 4.750.000</div>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          Bakı / Kadıköy
        </div>

        {/* Meta Info */}
        <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <BedDouble className="h-4 w-4" />
            3+1
          </div>
          <div className="flex items-center gap-1">
            <Layers className="h-4 w-4" />
            5. Kat
          </div>
        </div>
      </CardContent>

      <CardFooter className="pb-4 text-muted-foreground text-sm px-4">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          12.01.2026
        </div>
      </CardFooter>
    </Card>
  );
};

export default EstateCard;
