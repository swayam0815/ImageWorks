"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center p-5 border-b-4 border-purple-100 fixed w-full lg:hidden h-16">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          width={180}
          height={180}
          alt="logo"
        />
      </Link>
      <nav className="flex items-center gap-2">
        <SignedIn>
          <UserButton />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src={`/assets/images/logo-text.svg`}
                  alt="logo"
                  width={152}
                  height={23}
                />
                <ul className="my-20 gap-4 space-y-2 flex flex-col items-center justify-center">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        key={link.route}
                        className={`${
                          isActive && "bg-red-500 text-white"
                        } whitespace-nowrap p-2   flex items-center justify-center border-2 w-full rounded-xl  `}
                      >
                        <Link href={link.route} className="">
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
  
      </nav>
    </header>
  );
};

export default MobileNav;
