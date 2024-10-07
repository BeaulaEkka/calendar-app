import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <form action="">
          <CardHeader>
            <CardTitle>
              Welcome to Calendar <span className="text-orange-500">App</span>
            </CardTitle>
            <CardDescription>
              We need the following information to set up the profile
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-5">
            <div className="grid gap-y-2">
              <Label>Full Name</Label>
              <Input placeholder="Jane Doe" />
            </div>{" "}
            <div className="grid gap-y-2">
              <Label>User Name</Label>
              <div className="flex rounded-md">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-muted text-muted-foreground">
                  calendarapp.com/
                </span>

                <Input placeholder="Johndoe" className="rounded-l-none" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
