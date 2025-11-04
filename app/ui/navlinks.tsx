"use client";

import {
  UserGroupIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/admin/dashboard", icon: HomeIcon },
  {
    name: "Teachers", href: "/admin/teacher", icon: UserCircleIcon,
  },
  { name: "Students", href: "/admin/students", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-12 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-hex-orange": pathname === link.href, // checks if current pathname is active if yes highlight link div
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="block md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}