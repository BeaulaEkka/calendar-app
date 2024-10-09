import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function page() {
  return (
    <div className="flex w-[80%] min-h-screen mx-auto my-8">
      <div>
        <h2 className="font-semibold">Profile Information</h2>
        <p>Update your account's profile information and email address.</p>
        <div className="flex flex-col gap-2 mt-8">
          <div>
            <Label>Name</Label>
            <Input />
          </div>
          <div>
            <Label>Email</Label>
            <Input />
          </div>
        </div>
        <Button className="mt-8">Save</Button>
      </div>
    </div>
  );
}
