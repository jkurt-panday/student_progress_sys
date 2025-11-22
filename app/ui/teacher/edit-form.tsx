'use client';

import { GradeLevel, Teacher, TeacherForm } from "@/app/lib/definitions";
import { updateGradeLevel, updateTeacher } from "@/app/lib/action";
import Link from "next/link";
import { Button } from "../button";

export default function EditTeacherForm(
    { teachers }: { teachers: Teacher;}
) {
    const updateTeacherwithId = updateTeacher.bind(null, teachers.teacherid);


    return (

        <form action={updateTeacherwithId}>
             <div className="rounded-md bg-gray-50 p-4 md:p-6">

                     <div className="mb-4">
                    </div> 

                    {/* Teacher Name */}
                    <div className="mb-4">
                        <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
                            Enter name
                        </label>
                        <div className="relative flex flex-wrap rounded-xl gap-3 ">
                            <div className="relative w-full md:flex-1">
                            <input
                                id="teacher"
                                name="firstname"
                                type="text"
                                placeholder="First name"
                                className="peer flex w-full md:flex-1 rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={teachers.firstname}
                            />
                            {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                            </div>
                            <div className="relative w-full md:flex-1">
                            <input
                                id="teacher"
                                name="middlename"
                                type="text"
                                placeholder="Middle name"
                                className="peer block w-full md:flex-1 rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={teachers.middlename}
                            />
                            {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                            </div>
                            <div className="relative w-full md:flex-1">
                            <input
                                id="teacher"
                                name="lastname"
                                type="text"
                                step="0.01"
                                placeholder="Last name"
                                className="peer block w-full md:flex-1 rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={teachers.lastname}
                            />
                            {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                            </div>
                        </div>
                    </div>

                    {/* Teacher email , className at next and next2 line is for responsiveness */}
                    <div className="flex flex-wrap gap-2">  
                        <div className="mb-4 w-full md:flex-1">
                            <label htmlFor="teacherEmail" className="mb-2 block text-sm font-medium">
                                Enter email
                            </label>
                            <div className="relative mt-2 rounded-md w-full md:flex-1">
                                <div className="relative">
                                <input
                                    id="teacherEmail"
                                    name="email"
                                    type="email"
                                    placeholder="Ex. johndoe@mail.com"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue={teachers.email}
                                />
                                {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 w-full md:flex-1">
                            <label htmlFor="teacherEmail" className="mb-2 block text-sm font-medium">
                                Enter specialization
                            </label>
                            <div className="relative mt-2 rounded-md w-full md:flex-1">
                                <div className="relative">
                                <input
                                    id="teacherEmail"
                                    name="specialization"
                                    type="text"
                                    placeholder="Specialization"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue={teachers.specialization}
                                />
                                {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                    href="/admin/teacher"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                    Cancel
                    </Link>
                    <Button type="submit">Edit Teacher</Button>
                </div>
        </form>
    )
}


// ! grade level edit form

export function EditGradeLevelForm(
    { gradelevels, teachers }: { gradelevels: GradeLevel, teachers: TeacherForm[] }
) {
    const updateGradeLevelWithId = updateGradeLevel.bind(null, gradelevels.gradeid)
    
    return (
        <>
            <form action={updateGradeLevelWithId}>
                    <div className="mb-4">
                        <div className="rounded-md bg-gray-50 p-4 md:p-6">
                        {/* Teacher Name */}
                        <div className="mb-4">
                        <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
                            Choose teacher to assign to class
                        </label>
                        <div className="relative">
                            <select
                            id="teacher"
                            name="assignedteacher"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={gradelevels.assignedteacher}
                            aria-describedby='customer-error'     // added in chapter 14
                            >
                            <option value="" disabled>
                                Select a teacher
                            </option>
                            {teachers.map((teacher) => (
                                <option key={teacher.teacherid} value={teacher.teacherid}>
                                {teacher.firstname} {teacher.middlename} {teacher.lastname}
                                </option>
                            ))}
                            </select>
                        </div>
                            {/* // ! where erros appear for accessbility */}
                        
                        </div>
    
                        <div className="mb-4">
                            <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
                                Enter grade name and level
                            </label>
                            <div className="relative flex flex-wrap rounded-xl gap-3 ">
                                <div className="relative w-full md:flex-1">
                                <input
                                    id="teacher"
                                    name="gradename"
                                    type="text"
                                    placeholder="Ex. Grade 1"
                                    className="peer flex w-full md:flex-1 rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue={gradelevels.gradename}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* Buttons */}
                    <div className="mt-6 flex justify-end gap-4">
                        <Link
                        href="/admin/gradelevel"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                        >
                        Cancel
                        </Link>
                        <Button type="submit">Edit Grade Level</Button>
                    </div>
                    </div>
                </form>
        </>
    )
}