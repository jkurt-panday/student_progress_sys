"use client";

// import { useActionState } from "react";
import { TeacherForm } from "@/app/lib/definitions";
// import Link from "next/link";
import { 
    createTeacher,
    createGradeLevel
 } from "@/app/lib/action";
import Link from "next/link";
import { Button } from "../button";
import { useState } from "react";



export default function CreateTeacherForm( 
    // { teachers }: {teachers: TeacherField[]}
) {

    return (
        <>
            <form action={createTeacher}>
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
                    <Button type="submit">Create Teacher</Button>
                </div>
            </form>
        </>
    )
}



export function CreateGradeLevelForm(
    { teachers }: { teachers: TeacherForm[] }
) {
    return (
        <>
            <form action={createGradeLevel}>
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
                        defaultValue=""
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
                    <Button type="submit">Create Grade Level</Button>
                </div>
                </div>
            </form>
        </>
    )
}

export function CreateStudentInputFields() {
    const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState<number | "">("");

  function calculateAge(dob: string) {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      years--;
    }
    return years < 0 ? "" : years;
  }

  function handleDobChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setDateOfBirth(value);
    setAge(calculateAge(value));
  }

    return (
        <>
            <form>
                <div className="rounded-md bg-gray-50 p-4 md:p-6">
                    {/* Basic IDs */}
                    <div className="flex flex-wrap gap-2">
                        <div className="mb-4 w-full md:flex-1">
                            <label htmlFor="studentnum" className="mb-2 block text-sm font-medium">
                                Student number
                            </label>
                            <input
                                id="studentnum"
                                name="studentnum"
                                type="number"
                                placeholder="Ex. 10001"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                        <div className="mb-4 w-full md:flex-1">
                            <label htmlFor="lrn" className="mb-2 block text-sm font-medium">
                                LRN
                            </label>
                            <input
                                id="lrn"
                                name="lrn"
                                type="number"
                                placeholder="Ex. 123456789012"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium">
                            Student name
                        </label>
                        <div className="relative flex flex-wrap rounded-xl gap-3">
                            <div className="relative w-full md:flex-1">
                                <input
                                    name="firstname"
                                    type="text"
                                    placeholder="First name"
                                    className="peer flex w-full md:flex-1 rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
                                />
                            </div>
                            <div className="relative w-full md:flex-1">
                                <input
                                    name="middlename"
                                    type="text"
                                    placeholder="Middle name"
                                    className="peer block w-full md:flex-1 rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                                />
                            </div>
                            <div className="relative w-full md:flex-1">
                                <input
                                    name="lastname"
                                    type="text"
                                    placeholder="Last name"
                                    className="peer block w-full md:flex-1 rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sex, grade, age, DOB */}
                    <div className="flex flex-wrap gap-2">
                        <div className="mb-4 w-full md:flex-1">
                            <label htmlFor="sex" className="mb-2 block text-sm font-medium">
                                Sex
                            </label>
                            <select
                                id="sex"
                                name="sex"
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select sex
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className="mb-4 w-full md:flex-1">
                            <label htmlFor="gradename" className="mb-2 block text-sm font-medium">
                                Grade level
                            </label>
                            <input
                                id="gradename"
                                name="gradename"
                                type="text"
                                placeholder="Ex. Grade 1"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>

                        {/* TODO change this into a dropdown menu */}

                        <div className="mb-4 w-full md:flex-1">
                            <label htmlFor="age" className="mb-2 block text-sm font-medium">
                                Age
                            </label>
                            <input
                                id="age"
                                name="age"
                                type="number"
                                value={age}
                                readOnly
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 bg-gray-100"
                            />
                        </div>

                        <div className="mb-4 w-full md:flex-1">
                            <label htmlFor="dateofbirth" className="mb-2 block text-sm font-medium">
                                Date of birth
                            </label>
                            <input
                                id="dateofbirth"
                                name="dateofbirth"
                                type="date"
                                value={dateOfBirth}
                                onChange={handleDobChange}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>

                    {/* Guardian info */}
                    <div className="flex flex-wrap gap-2">
                        <div className="mb-4 w-full md:flex-1">
                            <label htmlFor="guardianname" className="mb-2 block text-sm font-medium">
                                Guardian name
                            </label>
                            <input
                                id="guardianname"
                                name="guardianname"
                                type="text"
                                placeholder="Ex. Jane Doe"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                        <div className="mb-4 w-full md:flex-1">
                            <label htmlFor="guardiancontact" className="mb-2 block text-sm font-medium">
                                Guardian contact
                            </label>
                            <input
                                id="guardiancontact"
                                name="guardiancontact"
                                type="text"
                                placeholder="Ex. 0917-000-0000"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/admin/student"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Create Student</Button>
                </div>
            </form>
        </>
    );
}