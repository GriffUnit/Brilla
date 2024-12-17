import { auth } from "@/auth";
import Navbar from "@/components/Navbar";

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  return (
    <main>
      {session && session?.user && <Navbar />}
      {children}
    </main>
  );
}
