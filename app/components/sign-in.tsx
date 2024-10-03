import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
        await signIn("google");
      }}
    >
      <button type="submit">Signin with GitHub</button>
      <button type="submit">Signin with Google</button>
    </form>
  );
}
