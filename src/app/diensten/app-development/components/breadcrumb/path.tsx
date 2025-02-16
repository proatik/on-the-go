"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const Route = () => {
  const pathname = usePathname();

  // Split path into segments and remove empty strings
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Function to format breadcrumb text (replace '-' with space and capitalize words)
  const formatBreadcrumb = (text: string) => {
    return text
      .split("-") // Split by dashes
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join words with spaces
  };

  return (
    <div className="bg-[#F5F5F5] flex items-center justify-start py-4 px-6">
      <nav className="flex text-[#263238] text-[15px]font-medium font-medium">
        <Link href="/" className="text-[#7E7E7E] hover:underline">Home</Link>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          return (
            <span key={href} className="flex items-center">
              <div className="mx-2 w-5 h-[1px] bg-[#7E7E7E]"></div>
              <Link
                href={href}
                className={` ${index === pathSegments.length - 1 ? "text-[#263238]" : "text-[#7E7E7E]"
                  } hover:underline`}
              >
                {formatBreadcrumb(segment)}
              </Link>
            </span>

          );
        })}
      </nav>
    </div>
  );
};
