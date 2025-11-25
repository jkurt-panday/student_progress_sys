import Breadcrumbs from "@/app/ui/teacher/breadcrumbs"
import { Metadata } from "next"
import { fetchTeacher } from "@/app/lib/data"
import CreateTeacherForm from "@/app/ui/teacher/create-form"

export const metadata: Metadata = {
    title: "Create Student"
}

// todo

export default async function Page() {
    const teacher = await fetchTeacher()
    console.log(teacher)
    
    return (
        <>
            <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: 'Student', href: '/admin/student' },
                {
                    label: 'Create Student',
                    href: `/admin/student/create`,
                    active: true,
                },
                ]}
            />
            {/* for the data input */}
            <CreateTeacherForm />
            </main>
        </>
    )
}