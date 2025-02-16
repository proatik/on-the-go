"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md h-[75px] xs:h-[94px]">
      <div className="container flex items-center justify-between h-full px-4 sm:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            width={140}
            height={32}
            alt="Younitech Logo"
            src="/logo-black.png"
            className="h-[31px] sm:h-[56px] w-auto"
          />
        </Link>

        <div className="flex items-center space-x-[45px]">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[20px] font-medium h-[56px]">
                  Diensten
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[240px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/diensten/web-development"
                          className="inline-flex items-center h-10 px-4 py-2 transition-colors rounded-md group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-[20px] font-medium w-full"
                        >
                          Web Development
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/diensten/app-development"
                          className="inline-flex items-center h-10 px-4 py-2 transition-colors rounded-md group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-[20px] font-medium w-full"
                        >
                          App Development
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[20px] font-medium h-[56px]">
                  Prijzen
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[240px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/prijzen/basic"
                          className="inline-flex items-center h-10 px-4 py-2 transition-colors rounded-md group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-[20px] font-medium w-full"
                        >
                          Basic
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/prijzen/premium"
                          className="inline-flex items-center h-10 px-4 py-2 transition-colors rounded-md group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-[20px] font-medium w-full"
                        >
                          Premium
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="">
                <Link
                  href="/over-ons"
                  className="inline-flex items-center justify-center h-[56px] px-4 py-2 transition-colors rounded-md group w-max hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-[20px] font-medium"
                >
                  Over Ons
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem className="text-[20px] font-medium">
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center h-[56px] px-4 py-2 transition-colors rounded-md group w-max hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-[20px] font-medium"
                >
                  FAQ
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem className="text-[20px] font-medium">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center h-[56px] px-4 py-2 transition-colors rounded-md group w-max hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-[20px] font-medium"
                >
                  Portfolio
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <button
              className="block md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-[38px] w-[38px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <Button
              asChild
              className="hidden md:inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 h-[56px] w-[156px] text-[20px] font-semibold"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white md:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              width={140}
              height={32}
              alt="Younitech Logo"
              src="/logo-black.png"
              className="w-auto h-8"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="transition-opacity rounded-sm opacity-70 ring-offset-background hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <span className="sr-only">Close</span>
            <svg
              fill="none"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="px-4 pb-4">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => {}}
                className="flex items-center justify-between w-full py-2"
              >
                Diensten
                <ChevronDown className="w-4 h-4" />
              </button>
            </li>
            <li>
              <button
                onClick={() => {}}
                className="flex items-center justify-between w-full py-2"
              >
                Prijzen
                <ChevronDown className="w-4 h-4" />
              </button>
            </li>
            <li>
              <Link href="/over-ons" className="block py-2">
                Over Ons
              </Link>
            </li>
            <li>
              <Link href="/faq" className="block py-2">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="block py-2">
                Portfolio
              </Link>
            </li>
            <li>
              <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                <Link href="/contact">Contact</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
