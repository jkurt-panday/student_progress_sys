"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import NavLinks from "./navlinks";

export default function SideandNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // handle ESC + scroll lock
  useEffect(() => {
    const handleEscKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKeyPress);
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex items-center md:hidden justify-between px-6 h-16 bg-hex-orange border-b border-gray-200 z-40">
        {/* Left: Logo + Hamburger (only show hamburger on mobile) */}
        <div className="flex items-center">
          <button
            className="mr-2 md:hidden" // only visible on mobile
            aria-label="Open Menu"
            onClick={handleDrawer}
          >
            <GiHamburgerMenu className="text-3xl" />
          </button>

          <Image src={"/KainosLogo.png"} width={32} height={32} alt="Logo" />
          <h1 className="ml-3 font-semibold text-lg uppercase  text-white">
            Kainos
          </h1>
        </div>
      </nav>

      {/* Overlay (only mobile/tablet) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40
          transform transition-transform duration-300
          md:translate-x-0  /* always visible on md+ */
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Sidebar header */}
        <div className="flex items-center p-4 border-b h-16 bg-hex-orange">
          <Image src={"/KainosLogo.png"} alt="Logo 2" width={32} height={32} />
          <h1 className="ml-4 font-bold text-2xl uppercase  text-white">
            Kainos
          </h1>
        </div>

        {/* links */}
        <NavLinks />

        {/* Logout Button */}
        <form className="absolute bottom-0 w-full"
          // action={async () => {
          //   'use server';
          //   await signOut({ redirectTo: '/' });
          // }}
        >
          <button className="flex h-12 w-full grow items-center justify-center gap-2 rounded-md bg-hex-blue text-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <BiLogOut className="w-6" />
            <div className="block md:block">Sign Out</div>
          </button>
        </form>
      </aside>
      

      {/* Main content wrapper (adds margin when sidebar is visible on desktop) */}
      <div className="pt-16 md:ml-64">
        {/* Your page content should go here in layout or parent component */}
      </div>
    </>
  );
}
