import { routes } from "@/shared/constants";
import { LogoIcon } from "@/shared/icons";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage, Separator } from "../ui";

export function SideBar() {
  return (
    <aside
      className={
        "h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto shadow-[#3e3e3e] shadow-sm"
      }>
      <div className="w-56 p-6 h-full hidden md:flex flex-col ">
        <div className="flex px-1 items-center gap-2">
          <LogoIcon fill={"#000"} />
          <h1 className={"font-semibold"}>Pinances</h1>
        </div>

        <Separator orientation={"horizontal"} className={"mt-4"} />

        <div className="flex flex-col gap-4 mt-10">
          {routes.map(({ link, name, icon }, i) => (
            <Link
              href={link}
              className="flex gap-2 items-center hover:bg-slate-100 duration-300 transition-all p-2 rounded-md"
              key={i}>
              {icon}
              <span className={""}>{name}</span>
            </Link>
          ))}
        </div>

        <div className="mt-auto border flex border-slate-400 p-2 gap-2 rounded-lg">
          <Avatar>
            <AvatarImage />
            <AvatarFallback>LC</AvatarFallback>
          </Avatar>
          <Separator orientation={"vertical"} />

          <div className="flex flex-col gap-1">
            <Link
              href={`/dashboard/profile`}
              className={
                "overflow-hidden flex items-center text-sm font-semibold"
              }>
              Lucas Campos
            </Link>
            <button className={"text-xs text-end"}>sair</button>
          </div>
        </div>
      </div>
    </aside>
  );
}
