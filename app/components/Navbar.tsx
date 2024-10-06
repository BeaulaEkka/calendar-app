import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/images/nextCalendarAppLogo.png";
import AuthModal from "./AuthModal";
import { auth } from "@/auth";
import { ModeToggle } from "@/components/ui/toggle";

import { LifeBuoy, LucideGithub, PlusCircle } from "lucide-react";
import {
  Cloud,
  CreditCard,
  Github,
  Mail,
  MessageSquare,
  Plus,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import SignoutButton from "./SignoutButton";

export default async function Navbar() {
  const session = await auth();

  return (
    <div className="w-full h-20 flex bg-gray-800 items-center justify-between px-6 shadow-md">
      <div className="w-[80%] mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center group hover:cursor-pointer">
          <Link href="/" className="flex items-center">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <p className="ml-2 font-bold text-orange-400 text-lg">
              Calendar App
            </p>
          </Link>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div>
          {!session ? (
            <AuthModal />
          ) : (
            <div className="flex gap-4 items-center justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <UserAvatar />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <UserPlus className="mr-2 h-4 w-4" />
                        <span>Invite users</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Email</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            <span>Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            <span>More...</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      <Plus className="mr-2 h-4 w-4" />
                      <span>New Team</span>
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <SignoutButton />
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>{" "}
        <ModeToggle />
      </div>
    </div>
  );
}
