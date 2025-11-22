import { fetchTeacherById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/teacher/breadcrumbs"
import EditTeacherForm from "@/app/ui/teacher/edit-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Edit Teacher"
}

export default async function Page(
    props: { params: Promise<{ id: string }>}
) {
    const params = await props.params;
    const id = params.id;

    const teacher = await fetchTeacherById(id);

    return (
        <main>
            <Breadcrumbs 
                breadcrumbs={[
                    {label: 'Teacher', href: '/admin/teacher'},
                    {label: 'Edit Teacher',
                        href: `admin/teacher/${id}/edit`,
                        active: true,
                    }
                ]}
            />
            {/* editing form */}
            <EditTeacherForm teachers={teacher}/>
        </main>
    )
}