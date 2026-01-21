import React from "react";
import Link from "next/link";

type Title = {
  title: string;
  url: string;
};

const SectionTitle = ({ title, url }: Title) => {
  return (
    <div className="flex items-center justify-between my-6">
      <div className="font-bold text-lg">{title}</div>

      <Link href={url}>Daha çox</Link>
    </div>
  );
};

export default SectionTitle;
