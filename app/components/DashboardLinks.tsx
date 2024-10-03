import React from "react";

interface iAppProps {
  id: number;
  name: string;
  href: string;
  icon: any;
}

export const dashboardLinks: iAppProps[] = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
    icon: <i className="fa fa-dashboard" />,
  },
];

export default function DashboardLinks() {
  return <div></div>;
}
