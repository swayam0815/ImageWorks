"use client";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { currentUser } from "@clerk/nextjs/server";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src={"/assets/images/logo-text.svg"}
            width={180}
            height={180}
            alt="logo"
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`transition-all duration-300  border-2 hover:border-red-900 hover:bg-red-500 hover:shadow-slate-600 hover:shadow-inner hover:text-white w-full rounded-xl flex items-center justify-center  group ${
                      isActive
                        ? "bg-red-500 border-2 shadow-slate-600 shadow-inner border-red-900 text-white"
                        : ""
                    }`}
                  >
                    <Link href={link.route} className="sidebar-link group">
                      <Image
                        src={link.icon}
                        alt={link.route}
                        width={24}
                        height={24}
                        className={`${
                          isActive && "brightness-200"
                        } hover:fill-white group-hover:brightness-200`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`transition-all duration-300  border-2 hover:border-red-900 hover:bg-red-500 hover:shadow-slate-600 hover:shadow-inner hover:text-white w-full rounded-xl flex items-center justify-center  group ${
                        isActive
                        ? "bg-red-500 border-2 shadow-slate-600 shadow-inner border-red-900 text-white"
                        : ""
                    }`}
                  >
                    <Link href={link.route} className="sidebar-link group">
                      <Image
                        src={link.icon}
                        alt={link.route}
                        width={24}
                        height={24}
                        className={`${
                          isActive && "brightness-200"
                        } hover:fill-white group-hover:brightness-200`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center text-red-500 cursor-pointer gap-2 p-2 transition-all hover:scale-105 border-2 bg-red-500 border-red-500 w-full rounded-xl">
                <UserButton showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-red-500 bg-cover">
              <Link href="/sign-in">Log In</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
