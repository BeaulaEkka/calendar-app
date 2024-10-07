import { auth } from "@/auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  const user = session?.user;

  return (
    <div className="flex gap-2 justify-center items-center">
      <p className="text-white text-xs">Welcome, {user?.name || user?.email}</p>
      <div>
        {user?.image ? (
          <Image
            src={user?.image}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <p className="size-[40px] rounded-full bg-gray-200">{user?.name}</p>
        )}
      </div>
    </div>
  );
}
