import { Navbar, SideBar } from "@/components";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/");
  // }

  return (
    <main className={"min-h-screen w-full flex"}>
      <SideBar />

      {children}
      <Navbar />
    </main>
  );
}
