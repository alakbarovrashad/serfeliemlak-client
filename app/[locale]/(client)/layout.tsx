import React from "react";
import ClientHeader from "@/components/client/ClientHeader";
import ClientFooter from "@/components/client/ClientFooter";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto px-4 sm:px-6 bg-muted/40">
      <ClientHeader />
      <main className="flex-1">{children}</main>
      <ClientFooter />
    </div>
  );
};

export default ClientLayout;
