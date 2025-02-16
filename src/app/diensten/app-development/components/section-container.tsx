"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionContainerProps {
    children: ReactNode;
    className?: string;
}

export const SectionContainer = ({ children, className = "" }: SectionContainerProps) => {
    return (
        <div
            className={twMerge("w-[92.8vw] max-w-[348px] sm:w-[90.5vw] sm:max-w-[695px] md:w-[83.9vw] md:max-w-[859px] lg:w-[75vw] lg:max-w-[1440px] xl:w-[75vw] xl:max-w-[1440px] mx-auto", className)}
        >
            {children}
        </div>
    );
};
