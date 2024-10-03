import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";
import logo from "@/public/images/nextCalendarAppLogo.png";
import { signIn } from "next-auth/react";
export default function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Try for Free</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex justify-center items-center ">
          <Image src={logo} width={50} height={50} alt="logo" />
          <div className="font-semibold text-gray-800 justify-center text-center items-center ">
            <h4>
              Calendar<span className="text-orange-500">App</span>
            </h4>
          </div>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <form
            action={async () => {
              "use Server";
              await signIn("google");
            }}
            className="w-full"
          >
            <Button>Sign In with Google</Button>
          </form>

          <Button>Sign In with Github</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
