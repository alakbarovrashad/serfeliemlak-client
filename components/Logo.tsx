import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.png";
import { CompanyData } from "@/data/Company";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-1">
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="w-auto"
        />
        <span className={cn("text-xl font-bold text-main", className)}>
          {CompanyData.name}
        </span>
      </div>
    </Link>
  );
};

export default Logo;
