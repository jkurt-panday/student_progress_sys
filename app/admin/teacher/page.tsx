import { Metadata } from "next";
import Search from "@/app/ui/search";
import { CreateTeacher } from "@/app/ui/teacher/buttons";
import { Suspense } from "react";
import { TeacherTableSkeleton } from "@/app/ui/skeletons";
import TeacherTable from "@/app/ui/teacher/table";
import Pagination from "@/app/ui/pagination";
import { fetchTeacherPages } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Teachers",
};



export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  // extracts the value associated with the 'query' key from the 'searchParam' object
  const query = searchParams?.query || ""; // ?.   = is optional chaining, might be null
  // extracts the value associated with the 'page' key
  const currentPage = Number(searchParams?.page) || 1; // added in chapter 11
  const totalPages = await fetchTeacherPages(query);     // returns the total number of pages based on the search query

// TODO check if pagination truly works

  return (
    <main >
      <h1 className="text-3xl font-bold ml-4 mb-4 bg-linear-to-r from-hex-blue via-[#398efd] to-[#ffdca8] bg-clip-text text-transparent">
        Teacher
      </h1>

      <div className="w-full">
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          {/* // ! search input */}
          <Search placeholder="Search teachers..." />
          {/* // ! invoice button */}
          <CreateTeacher />
        </div>
        <Suspense key={query + currentPage} fallback={<TeacherTableSkeleton />}>
          {/* // table that contains the invoices together with the customer  */}
          <TeacherTable query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </main>
  );
}
