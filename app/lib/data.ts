// ! this is for fetching data, for data mutation refer to action.ts

import postgres from "postgres";
import { Teacher, TeacherForm } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchCardData() {
    try {
        const teachersCountPromise = sql`SELECT COUNT(*) FROM teachers`
        const gradelevelCountPromise = sql`SELECT COUNT(*) FROM gradelevels`
        

        const data = await Promise.all([
            teachersCountPromise,
            gradelevelCountPromise
        ]);      // TODO add the count for students

        const numberofTeachers = Number(data[0][0].count ?? "0")
        const numberofGradelevels = Number(data[1][0].count ?? "0")

    return {
        numberofTeachers,
        numberofGradelevels
    }

    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch card data");
    }
}

// ! fetching teachers without search
export async function fetchTeacher() {
    try {
        const teachers = await sql<TeacherForm[]>`
        SELECT
            teacherid,
            firstname,
            middlename,
            lastname,
            email,
            specialization
        FROM teachers
        ORDER BY firstname ASC
        `;

        return teachers;
    } catch (error) {
        console.error("Database Error:", error)
        throw new Error("Failed to fetch teachers")
    }
}

// ! fetching teachers with id
export async function fetchTeacherById(id: string) {
    try {
        const data = await sql<TeacherForm[]>`
            SELECT 
                teacherid,
                firstname,
                middlename,
                lastname,
                email,
                specialization
            FROM teachers
            WHERE teacherid = ${id}`;

        return data[0];
    } catch (error) {
        console.log(error)
        throw new Error('Database Failure: faild to fetch teacher by ID')
    }
}

// ! fetcing teachers with search
const ITEMS_PER_PAGE = 6;
export async function fetchFilteredTeachers(
    query: string, currentPage: number
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const teachers = await sql<Teacher[]>`
        SELECT 
            teachers.teacherid,
            teachers.firstname,
            teachers.middlename,
            teachers.lastname,
            teachers.email,
            teachers.specialization
        FROM teachers
        WHERE 
            teachers.firstname ILIKE ${`%${query}%`} OR
            teachers.middlename ILIKE ${`%${query}%`} OR
            teachers.lastname ILIKE ${`%${query}%`} OR
            teachers.email ILIKE ${`%${query}%`} OR
            teachers.specialization ILIKE ${`%${query}%`}
        ORDER BY teachers.firstname DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return teachers;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch teachers (with quey)")
    }
}