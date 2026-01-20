import React from "react";
import { SocialData } from "@/data/Social";
import Link from "next/link";

const Social = () => {
  return (
    <div className="flex items-center gap-4">
      {SocialData.map((item) => {
        const Icon = item.icon;
        return (
          <Link href={item.url} key={item.title}>
            <Icon size={18} />
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
