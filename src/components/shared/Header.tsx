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
import { SectionContainer } from "@/app/diensten/app-development/components/section-container";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <SectionContainer>


        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              width={140}
              height={32}
              alt="Younitech Logo"
              src="/logo-black.png"
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex items-center space-x-[45px]">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Diensten</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-3 p-4 divide-gray-200">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/diensten/web-development"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            Web Development
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/diensten/app-development"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            App Development
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Prijzen</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/prijzen/basic"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            Basic
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/prijzen/premium"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            Premium
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/over-ons"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Over Ons
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/faq"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    FAQ
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/portfolio"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Portfolio
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <Button asChild className="bg-blue-500 hover:bg-blue-600">
                <Link href="/contact">Contact</Link>
              </Button>

              <button
                className="block md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                width={140}
                height={32}
                alt="Younitech Logo"
                src="/logo-black.png"
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <span className="sr-only">Close</span>
              <svg
                fill="none"
                className="h-6 w-6"
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
                  onClick={() => { }}
                  className="flex w-full items-center justify-between py-2"
                >
                  Diensten
                  <ChevronDown className="h-4 w-4" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => { }}
                  className="flex w-full items-center justify-between py-2"
                >
                  Prijzen
                  <ChevronDown className="h-4 w-4" />
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
      </SectionContainer>
    </header>
  );
}
