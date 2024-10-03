import React from "react";
import { requireUser } from "../lib/hooks";

export default async function Dashboard() {
  const session = await requireUser();
  console.log("session", session);

  return <div>this is dashboard page</div>;
}
