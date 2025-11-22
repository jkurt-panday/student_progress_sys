import { fetchGradelevelById, fetchTeacher } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/teacher/breadcrumbs"
import { EditGradeLevelForm } from "@/app/ui/teacher/edit-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Edit Grade Level"
}


export default async function Page(
    props: { params: Promise<{ id: string }>}
) {
    const params = await props.params;
    const id = params.id;

    const teacher = await fetchTeacher();
    const gradelevel = await fetchGradelevelById(id);

    return (
        <main>
            <Breadcrumbs 
                breadcrumbs={[
                    {label: 'Grade Level', href: '/admin/gradelevel'},
                    {label: 'Edit Grade Level',
                        href: `admin/gradelevel/${id}/edit`,
                        active: true,
                    }
                ]}
            />
            {/* editing form */}
            <EditGradeLevelForm gradelevels={gradelevel} teachers={teacher}/>
        </main>
    )
}