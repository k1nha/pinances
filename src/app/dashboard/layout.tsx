import { Navbar, SideBar } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <main className={"min-h-screen w-full flex"}>
      <SideBar />

      {children}
      <Navbar />
    </main>
  );
}
