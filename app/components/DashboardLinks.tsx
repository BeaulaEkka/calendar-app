import { HomeIcon, LucideProps, Settings, User2 } from "lucide-react";
import Link from "next/link";
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
  return (
    <>
      {dashboardLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          {link.name}
          <link.icon className="size-4" />
        </Link>
      ))}
    </>
  );
}
