"use client";

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
import { useFormState } from "react-dom";
import { OnboardingAction } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema } from "../lib/zodSchemas";
import { SubmitButton } from "../components/SubmitButtons";

export default function OnboardingPage() {
  const [lastResult, action] = useFormState(OnboardingAction, undefined);

  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: onboardingSchema,
      });
    },
    // Validate the form on blur event triggered
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            Welcome to Calendar <span className="text-orange-500">App</span>
          </CardTitle>
          <CardDescription>
            We need the following information to set up the profile
          </CardDescription>
        </CardHeader>

        <form action={action} id={form.id} onSubmit={form.onSubmit}>
          <CardContent className="flex flex-col gap-y-5">
            {/* fullName */}
            <div className="grid gap-y-2">
              <Label>Full Name</Label>
              <Input
                name={fields.fullName.name}
                defaultValue={fields.fullName.initialValue}
                key={fields.fullName.key}
                placeholder="Jane Doe"
              />
              {fields.fullName.errors && (
                <p className="text-red-500 text-xs">{fields.fullName.errors}</p>
              )}
            </div>{" "}
            {/* userName */}
            <div className="grid gap-y-2">
              <Label>User Name</Label>
              <div className="flex rounded-md border border-red-500">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-muted text-muted-foreground">
                  calendarapp.com/
                </span>
                <Input
                  name={fields.userName.name}
                  defaultValue={fields.userName.initialValue}
                  key={fields.userName.key}
                  placeholder="Johndoe"
                  className="rounded-l-none"
                />
              </div>{" "}
              {fields.userName.errors && (
                <p className="text-red-500 text-xs">{fields.userName.errors}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Submit" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
