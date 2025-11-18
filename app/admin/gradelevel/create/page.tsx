import { fetchGradeLevels, fetchTeacher } from "@/app/lib/data"
import { Metadata } from "next"
import Breadcrumbs from "@/app/ui/teacher/breadcrumbs"
import { CreateGradeLevelForm } from "@/app/ui/teacher/create-form"

export const metadata: Metadata = {
    title: "Create Grade Level"
}



export default async function Page() {
    // const gradelevel = await fetchGradeLevels()
    // console.log(gradelevel)

    const teacher = await fetchTeacher()
    console.log(teacher)

    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Grade Level', href: '/admin/gradelevel' },
                    { label: 'Create Grade level', href: '/admin/gradelevel/create', active: true }
                ]}
            ></Breadcrumbs>

            <CreateGradeLevelForm teachers={teacher}/>
        </>
    )
}