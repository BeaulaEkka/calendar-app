"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";
import googlelogo from "@/public/images/googlelogo.svg";
import githublogo from "@/public/images/githublogo.svg";
import Image from "next/image";
import { Loader2, LucideLoader2 } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface iAppProps {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;

  className?: string | undefined;
}
export function SubmitButton({ text, variant, className }: iAppProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className={cn("w-fit", className)}>
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please wait...
        </Button>
      ) : (
        <Button
          type="submit"
          variant={variant}
          className={cn("w-fit", className)}
        >
          {text}
        </Button>
      )}
    </>
  );
}
export function GoogleAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <LucideLoader2 className="size-4 mr-2 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button variant="outline" type="submit">
          <Image src={googlelogo} alt="google logo" className="size-4 mr-2" />
          Sign In with Google
        </Button>
      )}
    </>
  );
}

export function GithubAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <LucideLoader2 className="size-4 mr-2 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button variant="outline" type="submit">
          <Image src={githublogo} alt="github logo" className="size-4 mr-2" />
          Sign In with Github
        </Button>
      )}
    </>
  );
}
