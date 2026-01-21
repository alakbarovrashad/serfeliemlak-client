import EstateCard from "@/components/EstateCard";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <div>
      <SectionTitle title="Premium elanlar" url="premium-elanlar" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <EstateCard key={i} />
        ))}
      </div>
    </div>
  );
}
