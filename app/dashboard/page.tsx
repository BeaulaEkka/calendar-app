import React from "react";
import { requireUser } from "../lib/hooks";

export default async function Dashboard() {
  const session = await requireUser();
  console.log("session", session);

  return (
    <div>
      <h1>Hello from the dashboard</h1>
    </div>
  );
}
