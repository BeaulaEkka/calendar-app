"use client";
import { cn } from "@/lib/utils";
import { HomeIcon, LucideProps, Settings, User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface iAppProps {
  id: number;
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

export const dashboardLinks: iAppProps[] = [
  {
    id: 1,
    name: "Event Types",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    id: 2,
    name: "Meetings",
    href: "/dashboard/availability",
    icon: User2,
  },
  {
    id: 3,
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardLinks() {
  const pathname = usePathname();
  return (
    <div className="px-4 py-2">
      {dashboardLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn(
            "flex gap-2 items-center py-3 hover:bg-gray-200 p-2 rounded-sm",
            pathname === link.href
              ? "text-primary bg-primary-500"
              : "text-muted-foreground"
          )}
        >
          <link.icon className="size-4 text-orange-500 font-extrabold" />
          {link.name}
        </Link>
      ))}
    </div>
  );
}
