import Link from "next/link";
import React, { ReactNode } from "react";
import logo from "@/public/images/nextCalendarAppLogo.png";
import Image from "next/image";
import DashboardLinks from "../components/DashboardLinks";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden md:block border-r bg-muted/40 ">
        <div className="flex h-full max-h-screen flex-col gap-2 ">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] ">
            <Link href="/" className="flex gap-2 items-center">
              <Image src={logo} className="size-10" alt="logo" />
              <p className="font-semibold ">
                Calendar<span className="text-orange-500">App</span>
              </p>
            </Link>
          </div>
          <div className="flex-1">
            <DashboardLinks />
          </div>
        </div>
      </div>
      <div className="">
        <header className="w-full h-14 bg-gray-100 shadow-md px-8 flex items-center justify-between">
          <h1>Header Title</h1>
          <div className="">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className="md:hidden shrink-0"
                  size="icon"
                  variant="outline"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col">
                <nav className="mt-8">
                  {" "}
                  <DashboardLinks />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
