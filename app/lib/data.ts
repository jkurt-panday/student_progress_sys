// ! this is for fetching data, for data mutation refer to action.ts

import postgres from "postgres";
import { Teacher, TeacherForm, GradeLevel, Student } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchCardData() {
    try {
        const teachersCountPromise = sql`SELECT COUNT(*) FROM teachers`;
        const gradelevelCountPromise = sql`SELECT COUNT(*) FROM gradelevels`;
        const studentCountPromise = sql`SELECT COUNT(*) FROM students`;
        
        const data = await Promise.all([
            teachersCountPromise,
            gradelevelCountPromise,
            studentCountPromise
        ]);

        // console.log(data)

        const numberofTeachers = Number(data[0][0].count ?? "0")
        const numberofGradelevels = Number(data[1][0].count ?? "0")
        const numberofStudents = Number(data[2][0].count ?? "0")

        // console.log(numberofTeachers, numberofGradelevels, numberofStudents)

    return {
        numberofTeachers,
        numberofGradelevels,
        numberofStudents
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
        console.error("Database Error:", error);
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
        ORDER BY teachers.firstname ASC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return teachers;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch teachers (with quey)")
    }
}

// ! fetch teacher by pages
export async function fetchTeacherPages(query: string) {
    try {
        const data = await sql`
        SELECT COUNT(*)
        FROM teachers
        WHERE 
            teachers.firstname ILIKE ${`%${query}%`} OR
            teachers.middlename ILIKE ${`%${query}%`} OR
            teachers.lastname ILIKE ${`%${query}%`} OR
            teachers.email ILIKE ${`%${query}%`} OR
            teachers.specialization ILIKE ${`%${query}%`}
        `;

        const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error("Database error: ", error)
        throw new Error("Failed to fetch total pages of teacher")
    }
}


// ! fetching gradelevels

export async function fetchGradeLevels() {
    try {
        const gradelevels = await sql<GradeLevel[]>`
            SELECT
                gradelevels.gradeid,
                gradelevels.gradename,
                gradelevels.assignedteacher,
                teachers.firstname,
                teachers.middlename,
                teachers.lastname
            FROM gradelevels
            JOIN teachers ON gradelevels.assignedteacher = teachers.teacherid
            ORDER BY gradelevels.gradename ASC`;

        return gradelevels;
        
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error('Database Failure: Failed to fetch Grade Levels')
    }
}

export async function fetchGradelevelById(id: string) {
    try {
        const data = await sql<GradeLevel[]>`
            SELECT
                gradeid,
                gradename,
                assignedteacher
            FROM gradelevels
            WHERE gradeid = ${id}
        `;

        return data[0];

    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Database Failure: failed to fetch gradelevel by id")
    }
}

// ! fetching students

export async function fetchFilteredStudents (
    query: string, currentPage: number
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const students = await sql<Student[]>`
        SELECT
            students.studentid,
            students.studentnum,
            students.lrn,
            students.firstname,
            students.middlename,
            students.lastname,
            students.sex,
            gradelevels.gradename,
            students.age,
            students.dateofbirth,
            students.guardianname,
            students.guardiancontact
        FROM students
        JOIN gradelevels ON students.gradelevel = gradelevels.gradeid
        WHERE 
            students.studentnum::text   ILIKE ${`%${query}%`} OR
            students.lrn::text          ILIKE ${`%${query}%`} OR
            students.firstname          ILIKE ${`%${query}%`} OR
            students.middlename         ILIKE ${`%${query}%`} OR
            students.lastname           ILIKE ${`%${query}%`} OR
            LOWER(students.sex) = LOWER(${query}) OR
            gradelevels.gradename::text ILIKE ${`%${query}%`} OR
            students.age::text          ILIKE ${`%${query}%`} OR
            students.dateofbirth::text  ILIKE ${`%${query}%`} OR
            students.guardianname       ILIKE ${`%${query}%`} OR
            students.guardiancontact    ILIKE ${`%${query}%`}
        ORDER BY students.firstname ASC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        // console.log(students)

        return students;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch students (with query)")
    }
}

// ! fetch teacher by pages
export async function fetchStudentPages(query: string) {
    try {
        const data = await sql`
        SELECT COUNT(*)
        FROM students
        JOIN gradelevels ON students.gradelevel = gradelevels.gradeid
        WHERE 
            students.studentnum::text   ILIKE ${`%${query}%`} OR
            students.lrn::text          ILIKE ${`%${query}%`} OR
            students.firstname          ILIKE ${`%${query}%`} OR
            students.middlename         ILIKE ${`%${query}%`} OR
            students.lastname           ILIKE ${`%${query}%`} OR
            LOWER(students.sex) = LOWER(${query}) OR
            gradelevels.gradename::text ILIKE ${`%${query}%`} OR
            students.age::text          ILIKE ${`%${query}%`} OR
            students.dateofbirth::text  ILIKE ${`%${query}%`} OR
            students.guardianname       ILIKE ${`%${query}%`} OR
            students.guardiancontact    ILIKE ${`%${query}%`}
        `;

        const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error("Database error: ", error)
        throw new Error("Failed to fetch total pages of students")
    }
}