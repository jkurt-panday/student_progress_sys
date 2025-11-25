// import Image from "next/image"
import { fetchFilteredTeachers,
         fetchGradeLevels
 } from "@/app/lib/data";
import { UpdateTeacher, DeleteTeacher, UpdateGradelevel, DeleteGradelevel} from "../button";

export default async function TeacherTable({
    query, currentPage,
}: {
    query: string, currentPage: number
}) {
    const teachers = await fetchFilteredTeachers(query, currentPage);

    

    return (
        <>
            <div className="mt-6 flow-root">
                <div className="inline-block min-w-full align-middle">
                    <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                        {/* mobile version */}
                        <div className="md:hidden">
                            {
                                teachers?.map((teacher) => (
                                    <div
                                        key={teacher.teacherid}
                                        className="mb-2 w-full rounded-md bg-white p-4"
                                    >
                                        <div className="flex items-center justify-between border-b pb-4">
                                        <div>
                                            <div className="mb-2 flex items-center">
                                            {/* <Image
                                                // src={teacher.image_url}
                                                className="mr-2 rounded-full"
                                                width={28}
                                                height={28}
                                                alt={`${teacher.name}'s profile picture`}
                                            /> */}
                                            <p>{teacher.firstname} {teacher.middlename} {teacher.lastname}</p>
                                            </div>
                                            <p className="text-sm text-gray-500">{teacher.email}</p>
                                            <p className="text-sm text-gray-500">{teacher.specialization}</p>
                                        </div>
                                        {/* <InvoiceStatus status={teacher.status} /> */}
                                        </div>
                                        <div className="flex w-full items-center justify-between pt-4">
                                        <div>
                                            <p className="text-xl font-medium">
                                            {/* {formatCurrency(teacher.amount)} */}
                                            </p>
                                            {/* <p>{formatDateToLocal(teacher.date)}</p> */}
                                        </div>
                                        <div className="flex justify-end gap-2">
                                            <UpdateTeacher id={teacher.teacherid} />
                                            <DeleteTeacher id={teacher.teacherid} />
                                        </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {/* desktop version */}
                        <table className="hidden min-w-full text-gray-900 md:table">
                            <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-bold sm:pl-6">
                                First Name
                                </th>
                                <th scope="col" className="px-3 py-5 font-bold">
                                Middle Name
                                </th>
                                <th scope="col" className="px-3 py-5 font-bold">
                                Last Name
                                </th>
                                <th scope="col" className="px-3 py-5 font-bold">
                                Email
                                </th>
                                <th scope="col" className="px-3 py-5 font-bold">
                                Specialization
                                </th>
                                <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white">
                            {teachers?.map((teacher) => (
                                <tr
                                key={teacher.teacherid}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex items-center gap-3">
                                    {/* <Image
                                        src={teacher.image_url}
                                        className="rounded-full"
                                        width={28}
                                        height={28}
                                        alt={`${teacher.name}'s profile picture`}
                                    /> */}
                                    <p>{teacher.firstname}</p>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {teacher.middlename}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {teacher.lastname}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {teacher.email}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {teacher.specialization}
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                    <UpdateTeacher id={teacher.teacherid} />
                                    <DeleteTeacher id={teacher.teacherid} />
                                    </div>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}



export async function GradeLevelTable() {
    const gradelevels = await fetchGradeLevels()

    return (
        <>
            <div className="mt-6 flow-root">
                <div className="inline-block min-w-full align-middle">
                    <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                        {/* mobile version */}
                        <div className="md:hidden">
                            {
                                gradelevels?.map((gradelvl) => (
                                    <div
                                        key={gradelvl.gradeid}
                                        className="mb-2 w-full rounded-md bg-white p-4"
                                    >
                                        <div className="flex items-center justify-between border-b pb-4">
                                        <div>
                                            <div className="mb-2 flex items-center">
                                            {/* <Image
                                                // src={teacher.image_url}
                                                className="mr-2 rounded-full"
                                                width={28}
                                                height={28}
                                                alt={`${teacher.name}'s profile picture`}
                                            /> */}
                                            <p>{gradelvl.gradename} </p>
                                            </div>
                                            <p className="text-sm text-gray-500">Assigned Teacher: </p>
                                            <p className="text-sm text-gray-500">{gradelvl.firstname} {gradelvl.middlename} {gradelvl.lastname}</p>
                                        </div>
                                        {/* <InvoiceStatus status={teacher.status} /> */}
                                        </div>
                                        <div className="flex w-full items-center justify-between pt-4">
                                        <div>
                                            <p className="text-xl font-medium">
                                            {/* {formatCurrency(teacher.amount)} */}
                                            </p>
                                            {/* <p>{formatDateToLocal(teacher.date)}</p> */}
                                        </div>
                                        <div className="flex justify-end gap-2">
                                            <UpdateGradelevel id={gradelvl.gradeid} />
                                            <DeleteGradelevel id={gradelvl.gradeid} />
                                        </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {/* desktop version */}
                        <table className="hidden min-w-full text-gray-900 md:table">
                            <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-bold sm:pl-6">
                                Grade Name
                                </th>
                                <th scope="col" className="px-3 py-5 font-bold">
                                Assigned Teacher
                                </th>
                                <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white">
                            {gradelevels?.map((gradelvl) => (
                                <tr
                                key={gradelvl.gradeid}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex items-center gap-3">
                                    {/* <Image
                                        src={teacher.image_url}
                                        className="rounded-full"
                                        width={28}
                                        height={28}
                                        alt={`${teacher.name}'s profile picture`}
                                    /> */}
                                    <p>{gradelvl.gradename}</p>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {gradelvl.firstname} {gradelvl.middlename} {gradelvl.lastname}
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                    <UpdateGradelevel id={gradelvl.gradeid} />
                                    <DeleteGradelevel id={gradelvl.gradeid} />
                                    </div>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}