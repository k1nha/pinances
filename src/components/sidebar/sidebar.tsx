import Link from "next/link";
import { SVGProps, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage, Separator } from "../ui";
import { useRouter } from "next/router";

export function SideBar() {
  const activeMenu = true;
  const router = useRouter();

  return (
    <aside
      onMouseLeave={() => console.log("saiu")}
      onMouseOver={() => console.log("entrou")}
      className={
        "h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto shadow-[#3e3e3e] shadow-sm"
      }>
      {activeMenu && (
        <div className="w-56 p-6 h-full flex flex-col">
          <div className="flex px-1 items-center gap-2">
            <Icon />
            <h1 className={"font-semibold"}>Pinances</h1>
          </div>

          <Separator orientation={"horizontal"} className={"mt-4"} />

          <div className="flex flex-col gap-4 mt-10">
            {Array.from(Array(3).keys()).map((e, i) => (
              <Link
                href={"#"}
                className="flex gap-2 items-center hover:bg-slate-100 duration-300 transition-all p-2 rounded-md"
                key={i}>
                <PhClipboardLight height={22} width={22} />
                <span className={""}>Text</span>
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
              <h4
                className={
                  "overflow-hidden flex items-center text-sm font-semibold"
                }>
                Lucas Campos
              </h4>
              <button
                className={"text-xs text-end"}
                onClick={() => router.push("/")}>
                sair
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}

export function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="#000"
      viewBox="0 0 256 256">
      <path d="M216,96H176V56a8,8,0,0,0-8-8H48V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0v-8h88a8,8,0,0,0,8-8V160h72a8,8,0,0,0,8-8V104A8,8,0,0,0,216,96ZM160,64V96H48V64ZM128,192H48V160h80Zm80-48H48V112H208Z"></path>
    </svg>
  );
}

export function PhClipboardLight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}>
      <path
        fill="currentColor"
        d="M200 34h-37.17a45.91 45.91 0 0 0-69.66 0H56a14 14 0 0 0-14 14v168a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14Zm-72-4a34 34 0 0 1 34 34v2H94v-2a34 34 0 0 1 34-34Zm74 186a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h29.67A45.77 45.77 0 0 0 82 64v8a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6v-8a45.77 45.77 0 0 0-3.67-18H200a2 2 0 0 1 2 2Z"></path>
    </svg>
  );
}
