import { SideBar } from "@/components";

export function UserLayout({ children }: { children?: React.ReactNode }) {
  return (
    <main className={"min-h-screen w-full flex"}>
      <SideBar />

      {children}
    </main>
  );
}
