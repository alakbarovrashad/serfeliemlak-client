import React from "react";
import Subscribe from "./Subscribe";
import { FooterMenuData } from "@/data/Footer";
import Link from "next/link";
import Logo from "../Logo";
import Social from "./Social";

const ClientFooter = () => {
  return (
    <footer>
      <Subscribe />

      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-5 py-6">
        <div className="flex flex-col items-start gap-4 col-span-2 md:col-span-3 lg:col-span-2">
          <Logo />
          <p className="text-muted-foreground text-balance">
            An open-source collection of copy-and-paste shadcn/ui components,
            blocks, and templates - paired with a powerful Shadcn theme
            generator to craft, customize, and ship faster.
          </p>
          <div className="w-36">
            <Social />
            <hr className="mt-4" />
          </div>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Roadmap
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Changelog
          </a>
        </div>

        {FooterMenuData.map((item) => (
          <div className="flex flex-col gap-5" key={item.title}>
            <div className="text-lg font-medium">{item.title}</div>
            <ul className="text-muted-foreground space-y-3">
              {item.menu.map((eleman) => (
                <li key={eleman.item}>
                  <Link
                    href={eleman.url}
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    {eleman.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full text-center py-4 border-t text-muted-foreground">
        <div>
          <p className="text-balance">
            Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş
            elanların məzmununa görə məsuliyyət daşımır.
          </p>
          <p className="mt-1">
            &copy; 2008-2026 Digital Classifieds MMC.VÖEN: 1405631661
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ClientFooter;
