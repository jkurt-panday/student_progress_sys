import CardWrapper from "@/app/ui/admin/card";
import { Suspense } from "react";
import { CardsWrapperSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default function page() {
  return (
    <main>
      <h1 className="text-3xl font-bold ml-4 mb-4 bg-linear-to-r from-hex-blue via-[#398efd] to-[#ffdca8] bg-clip-text text-transparent">
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<CardsWrapperSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
    </main>
  );
}
