'use server';

import z from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' }); 

const FormSchema = z.object({
    teacherid: z.string(),
    firstname: z.string(),
    middlename: z.string().nullable(),
    lastname: z.string(),
    email: z.string(),
    specialization: z.string().nullable()
})

const CreateTeacher = FormSchema.omit({ teacherid: true});

export async function createTeacher(formData: FormData) {
    console.log(formData)

    const { 
        firstname, 
        middlename,
        lastname,
        email,
        specialization
     } = CreateTeacher.parse({
        firstname: formData.get("firstname"),
        middlename: formData.get("middlename"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        specialization: formData.get("specialization"),
    });

    // console.log("DB URL Check:", process.env.DATABASE_URL);

    try {
        await sql`
            INSERT INTO teachers (firstname, middlename, lastname, email, specialization)
            VALUES (${firstname}, ${middlename}, ${lastname}, ${email}, ${specialization})
        `;
    } catch (error) {
        console.log(error);
        throw new Error('Database Error: Failed to create teacher.')
    }

    // revalidation
    revalidatePath('/admin/teacher');
    // redirect
    redirect('/admin/teacher');

    // test
    console.log( {firstname, middlename, lastname, email, specialization} )

}

const UpdateTeacher = FormSchema.omit({ teacherid: true })

export async function updateTeacher(id: string, formData: FormData) {
    const { firstname, 
            middlename, 
            lastname, 
            email, 
            specialization 
        } = UpdateTeacher.parse({
            firstname: formData.get('firstname'),
            middlename: formData.get('middlename'),
            lastname: formData.get('lastname'),
            email: formData.get('email'),
            specialization: formData.get('specialization'),
    })

    try {
        await sql`
        UPDATE teachers
        SET firstname = ${firstname},
            middlename = ${middlename},
            lastname = ${lastname},
            email = ${email},
            specialization = ${specialization}
        WHERE teacherid = ${id}`;
    } catch (error) {
        console.log(error);
        throw new Error('Database failure: Failed to update teacher')
    }

    revalidatePath('/admin/teacher')
    redirect('/admin/teacher')
}

// ! deleting teacher

export async function deleteTeacher(id: string) {
    try {
        await sql`DELETE FROM teachers WHERE teacherid = ${id}`;
    } catch (error) {
        console.log(error)
        throw new Error('Failed to delete Teacher')
    }

    revalidatePath('/admin/teachers')
}