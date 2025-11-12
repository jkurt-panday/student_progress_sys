"use client";

// import { useActionState } from "react";
// import { TeacherField } from "@/app/lib/definitions";
// import Link from "next/link";
import { createTeacher } from "@/app/lib/action";
import Link from "next/link";
import { Button } from "../button";




export default function CreateTeacherForm( 
    // { teachers }: {teachers: TeacherField[]}
) {
        // TODO create a mobile version of the form

    return (
        <>
            <form action={createTeacher}>
                <div className="rounded-md bg-gray-50 p-4 md:p-6">

                    {/* Teacher Name */}
                     <div className="mb-4">
                    {/* <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
                        Choose teacher
                    </label>
                    <div className="relative">
                        <select
                        id="teacher"
                        name="teacherId"
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        defaultValue=""
                        >
                        <option value="" disabled>
                            Select a teacher
                        </option>
                        {teachers.map((customer) => (
                            <option key={customer.id} value={customer.id}>
                            {customer.name}
                            </option>
                        ))}
                        </select> */}
                        {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
                     {/* </div> */} 
                    </div> 

                    {/* Teacher Name */}
                    <div className="mb-4">
                    <label htmlFor="teacher" className="mb-2 block text-sm font-medium">
                        Enter name
                    </label>
                    <div className="relative grid grid-cols-3 mt-2 rounded-md gap-2">
                        <div className="relative">
                        <input
                            id="teacher"
                            name="firstname"
                            type="text"
                            placeholder="First name"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
                        />
                        {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                        </div>
                        <div className="relative">
                        <input
                            id="teacher"
                            name="middlename"
                            type="text"
                            placeholder="Middle name"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                        />
                        {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                        </div>
                        <div className="relative">
                        <input
                            id="teacher"
                            name="lastname"
                            type="text"
                            step="0.01"
                            placeholder="Last name"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
                        />
                        {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                        </div>
                    </div>
                    </div>

                    {/* Teacher email */}
                    <div className="grid grid-cols-2 gap-2.5">
                    <div className="mb-4">
                        <label htmlFor="teacherEmail" className="mb-2 block text-sm font-medium">
                            Enter email
                        </label>
                        <div className="relative mt-2 rounded-md">
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
                    <div className="mb-4">
                        <label htmlFor="teacherEmail" className="mb-2 block text-sm font-medium">
                            Enter specialization
                        </label>
                        <div className="relative mt-2 rounded-md">
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
                    

                    {/* Invoice Status */}
                    <fieldset>
                    {/* <legend className="mb-2 block text-sm font-medium">
                        Set the invoice status
                    </legend>
                    <div className="rounded-md border border-gray-200 bg-white px-35 py-3">
                        <div className="flex gap-4">
                        <div className="flex items-center">
                            <input
                            id="pending"
                            name="status"
                            type="radio"
                            value="pending"
                            className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                            />
                            <label
                            htmlFor="pending"
                            className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                            >
                            Pending 
                            <ClockIcon className="h-4 w-4" />
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                            id="paid"
                            name="status"
                            type="radio"
                            value="paid"
                            className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                            />
                            <label
                            htmlFor="paid"
                            className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                            >
                            Paid 
                            <CheckIcon className="h-4 w-4" />
                            </label>
                        </div>
                        </div>
                    </div> */}
                    </fieldset> 
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