import { ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PrivacyPolicyData } from "@/data/PrivacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-muted/40 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <ShieldCheck className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            Məxfilik Siyasəti
          </h1>
          <p className="mt-2 text-muted-foreground">
            Şəxsi məlumatlarınızın necə toplandığını, istifadə olunduğunu və
            qorunduğunu izah edirik.
          </p>
        </div>

        {/* Content */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-8 space-y-8 text-sm leading-relaxed">
            {PrivacyPolicyData.map((item, i) => (
              <section className="space-y-2" key={i}>
                <h2 className="text-lg font-semibold">
                  {item.id}. {item.title}
                </h2>
                <p className="text-muted-foreground">{item.description}</p>
              </section>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
