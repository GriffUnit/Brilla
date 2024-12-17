import { auth, signIn, signOut } from "@/auth";
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
          {
            session && session?.user && (
              <>
                <Link href="/question/ask">
                  <span className="max-sm:hidden">Ask Question</span>
                  <BadgePlus className="size-6 sm:hidden" />
                </Link>

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
            ) /* : (
            <form
              action={async () => {
                "use server";

                await signIn("google");
              }}
            >
              <button type="submit">Login</button>
            </form>
          ) */
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
