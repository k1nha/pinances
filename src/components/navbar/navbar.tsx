import { routes } from "@/shared/constants";
import { SolarLogout2Outline } from "@/shared/icons";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white md:hidden  border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        {routes.map(({ link, name, icon }, i) => (
          <Link
            href={link}
            key={i}
            className={
              "flex flex-col gap-1 items-center justify-center text-sm"
            }>
            {icon}
            {name}
          </Link>
        ))}
        <button className={"flex flex-col gap-1 items-center justify-center text-sm"}>
          <SolarLogout2Outline height={22} width={22} />
          Sair
        </button>
      </div>
    </div>
  );
}
