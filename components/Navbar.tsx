import { auth, signOut } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-5 bg-gray-800 shadow-sm font-work-sans text-white">
      <nav className="flex justify-between items-center w-full">
        <Link href="/">
          <Image src="/Icon.png" alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5">
          {session && session?.user && (
            <>
              <Link href="/question/ask">
                <span className="max-sm:hidden">Create a quiz</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/login" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">LogOut</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
