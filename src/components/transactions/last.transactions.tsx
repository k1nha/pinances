"use client";
import { Avatar, AvatarFallback } from "../ui";

export function LastTransactions() {
  return (
    <div className="flex justify-between items-center ">
      <div className={"flex items-center gap-4"}>
        <Avatar>
          <AvatarFallback>T</AvatarFallback>
        </Avatar>

        <div className="">
          <h4 className={"font-semibold"}>Salário</h4>
          <p className={"text-sm text-slate-500"}>Entrada</p>
        </div>
      </div>

      <p className={"font-semibold"}>R$3000</p>
    </div>
  );
}
