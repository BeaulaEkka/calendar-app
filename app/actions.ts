"use server";
import prisma from "./lib/db";
import { requireUser } from "./lib/hooks";
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema, onboardingSchemaValidation } from "./lib/zodSchemas";
import { redirect } from "next/dist/server/api-utils";

export async function OnboardingAction(prevState: any, formData: FormData) {
  const session = await requireUser();

  // const submission = parseWithZod(formData, {
  //   schema: onboardingSchema,
  // });

  // if (submission.status !== "success") {
  //   return submission.reply();
  // }

  const submission = await parseWithZod(formData, {
    schema: onboardingSchemaValidation({
      async isUsernameUnique() {
        const existingUserName = await prisma.user.findUnique({
          where: {
            userName: formData.get("userName") as string,
          },
        });
        return !existingUserName;
      },
    }),
    async: true,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await prisma.user.update({
    where: {
      id: session?.user?.id,
    },
    data: {
      userName: submission.value.userName,
      name: submission.value.fullName,
    },
  });

  return redirect("/dashboard");
}
