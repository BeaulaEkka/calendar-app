"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";
import googlelogo from "@/public/images/googlelogo.svg";
import Image from "next/image";
import { LucideLoader2 } from "lucide-react";

export default function GoogleAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <LucideLoader2 className="size-4 mr-2 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button variant="outline">
          <Image src={googlelogo} alt="google logo" className="size-4 mr-2" />
          Sign In with Google
        </Button>
      )}
    </>
  );
}
