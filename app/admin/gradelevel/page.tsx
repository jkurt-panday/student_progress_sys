// import Search from "@/app/ui/search"
import { GradeLevelTable } from "@/app/ui/teacher/table"
import { CreateGradeLevel } from "@/app/ui/teacher/buttons"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Grade Level"
}

export default function Page() {

    return (
        <>
            <h1 className="text-3xl font-bold ml-4 mb-4 bg-linear-to-r from-hex-blue via-[#398efd] to-[#ffdca8] bg-clip-text text-transparent">
                Grade Level
            </h1>
            <div className="mt-4 flex items-end justify-end gap-2 md:mt-8">
                {/* <span className="hidden"><Search placeholder="Search grade level`" /></span> */}
                <CreateGradeLevel></CreateGradeLevel>
            </div>    
            <GradeLevelTable></GradeLevelTable>
        </>
    )
}