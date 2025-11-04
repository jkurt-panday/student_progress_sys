// ! this is for fetching data, for data mutation refer to action.ts

import postgres from "postgres";
import { Teacher, TeacherField } from "./definitions";

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

export async function fetchCardData() {
    try {
        const teachersCountPromise = sql`SELECT COUNT(*) FROM teachers`
        const classesCountPromise = sql`SELECT COUNT(*) FROM classes`
        

        const data = await Promise.all([
            teachersCountPromise,
            classesCountPromise
        ]);      // TODO add the count for students

        const numberofTeachers = Number(data[0][0].count ?? "0")
        const numberofClasses = Number(data[0][0].count ?? "0")

    return {
        numberofTeachers,
        numberofClasses
    }

    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch card data");
    }
}

// ! fetching teachers without search
export async function fetchTeacher() {
    try {
        const teachers = await sql<TeacherField[]>`
        SELECT
            id,
            name
        FROM teachers
        ORDER BY name ASC
        `;

        return teachers;
    } catch (error) {
        console.error("Database Error:", error)
        throw new Error("Failed to fetch teachers")
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
            teachers.id,
            teachers.name,
            teachers.email
        FROM teachers
        WHERE 
            teachers.name ILIKE ${`%${query}%`} OR
            teachers.email ILIKE ${`%${query}%`}
        ORDER BY teachers.name DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return teachers;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch teachers (with quey)")
    }
}