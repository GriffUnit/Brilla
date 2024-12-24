import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  /*  if (!session) {
    redirect("/login");
  } */
  return (
    <main>
      {session && session?.user && <Navbar />}
      {children}
    </main>
  );
}
