import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <div>Hello from the dashboard layout{children}</div>;
}
