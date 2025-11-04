import Breadcrumbs from "@/app/ui/teacher/breadcrumbs"
import { Metadata } from "next"
import { fetchTeacher } from "@/app/lib/data"
// import CreateForm from "@/app/ui/teacher/create-form"

export const metadata: Metadata = {
    title: "Create Teacher"
}

export default async function Page() {
    // const teacher = await fetchTeacher()
    
    return (
        <>
            <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: 'Teacher', href: '/admin/teacher' },
                {
                    label: 'Create Teacher',
                    href: `/admin/teacher/create`,
                    active: true,
                },
                ]}
            />
            {/* for the data input */}
            {/* <CreateForm customers={customers} /> */}
            </main>
        </>
    )
}