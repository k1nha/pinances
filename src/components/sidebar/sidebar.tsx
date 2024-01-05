import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { routes } from "@/shared/constants";
import { LogoIcon } from "@/shared/icons";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { ButtonSignOut } from "..";
import { Avatar, AvatarFallback, AvatarImage, Separator } from "../ui";

export async function SideBar() {
  const session = await getServerSession(authOptions);

  function stringAvatar(name: string) {
    const nameSplited = name.split(" ");

    if (nameSplited.length > 1) {
      return `${nameSplited[0][0].toUpperCase()}${nameSplited[1][0].toUpperCase()}`;
    }
    return `${nameSplited[0][0].toUpperCase()}`;
  }

  return (
    <aside className="min-h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto shadow-[#3e3e3e] shadow-sm">
      <div className="w-56 p-6 h-full hidden md:flex flex-col ">
        <div className="flex px-1 items-center gap-2">
          <LogoIcon fill="#000" />
          <h1 className="font-semibold">Pinances</h1>
        </div>

        <Separator orientation="horizontal" className="mt-4" />

        <div className="flex flex-col gap-4 mt-10">
          {routes.map(({ link, name, icon }, i) => (
            <Link
              href={link}
              className="flex gap-2 items-center hover:bg-slate-100 duration-300 transition-all p-2 rounded-md"
              key={i}>
              {icon}
              <span className="">{name}</span>
            </Link>
          ))}
        </div>

        <div className="mt-auto border flex border-slate-400 p-2 gap-2 rounded-lg">
          <Avatar>
            <AvatarImage />
            <AvatarFallback>
              {stringAvatar(session?.user.user_name || "")}
            </AvatarFallback>
          </Avatar>
          <Separator orientation="vertical" />

          <div className="flex flex-col gap-1 w-full">
            <Link
              href="/dashboard/profile"
              className="overflow-hidden flex items-center text-sm font-semibold capitalize">
              {session?.user?.user_name}
            </Link>
            <ButtonSignOut />
          </div>
        </div>
      </div>
    </aside>
  );
}
