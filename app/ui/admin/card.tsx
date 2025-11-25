import { fetchCardData } from "@/app/lib/data";

import {
  BanknotesIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

// object of icons
const iconMap = {
  collected: BanknotesIcon,
  teachers: UserGroupIcon,
  students: UserGroupIcon,
  classes: InboxIcon,
};

export default async function CardWrapper() {
  // moved data fetching to the component
  // fetchCardData fetches the data
  // CardWrapper contains all the cards
  // Cards displays the data

  const {
    numberofTeachers,
    numberofGradelevels,
    numberofStudents,
    // totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      {/* NOTE: Uncomment this code in Chapter 9 */}

      {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
      <Card title="Total Teachers" value={numberofTeachers} type="teachers" />
      <Card title="Students" value={numberofStudents} type="students" />
      <Card title="Total Grade Levels" value={numberofGradelevels} type="classes" />
    </>
  );
}

export function Card({
  // variables passed in for the component
  title,
  value,
  type,
}: {
  // the data type of said variables
  title: string;
  value: number | string;
  type: "classes" | "teachers" | "students" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-hex-blue p-2 shadow-sm">
      <div className="flex p-4">
        {/* // ! ternary operator */}
        {Icon ? <Icon className="h-5 w-5 text-white" /> : null}
        <h3 className="ml-2 text-sm font-medium text-white">{title}</h3>
      </div>
      <p
        className={`truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
