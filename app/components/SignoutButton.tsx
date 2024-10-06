import { signOut } from "@/auth";
import { LogOut } from "lucide-react";

export default function SignoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="flex"
    >
      <LogOut className="mr-2 h-4 w-4" />
      <button type="submit">Sign Out</button>
    </form>
  );
}
