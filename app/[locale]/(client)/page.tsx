import { i18n, Locale } from "@/i18n";
import { getDictionary } from "@/lib/dictionaries";

import EstateCard from "@/components/EstateCard";
import SectionTitle from "@/components/SectionTitle";

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return (
    <div>
      <h1 className="text-3xl font-bold">{dict.site.title}</h1>
      <SectionTitle title="Premium elanlar" url="premium-elanlar" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <EstateCard key={i} />
        ))}
      </div>
    </div>
  );
}
