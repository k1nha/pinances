"use client";
import { InfoCard, LastTransactions } from "@/components";
import { Card, CardTitle } from "@/components/ui";
import {
  SolarArrowToTopLeftOutline,
  SolarDollarLineDuotone,
} from "@/shared/icons";
import { useQuery } from "@tanstack/react-query";

export function DashboardModule() {
  const { data, isLoading } = useQuery({
    queryFn: () => {},
    queryKey: ["infos-user"],
  });

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 md:mt-20">
        <InfoCard
          icon={<SolarDollarLineDuotone />}
          title="Em conta"
          value="R$4500,00"
        />

        <Card className="p-6">
          <CardTitle className="flex justify-between items-center">
            <span>Entradas</span>
            <SolarArrowToTopLeftOutline color="green" />
          </CardTitle>

          <h3 className="text-2xl font-bold mt-2 overflow-hidden">+12</h3>
        </Card>
        <Card className="p-6">
          <CardTitle className="flex justify-between items-center">
            <span>Saidas</span>
            <SolarArrowToTopLeftOutline color="red" className="rotate-180" />
          </CardTitle>

          <h3 className="text-2xl font-bold mt-2 overflow-hidden">-24</h3>
        </Card>
        <Card className="p-6">
          <CardTitle className="flex justify-between items-center">
            <span>Em conta</span>
            <SolarDollarLineDuotone />
          </CardTitle>

          <h3 className="text-2xl font-bold mt-2 overflow-hidden">R$4500,00</h3>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 flex flex-col gap-4">
          <div className="">
            <h1 className="font-semibold">Ultimos registros</h1>
            <span className="text-sm text-slate-500">
              Você fez 30 transações no último mês
            </span>
          </div>

          <LastTransactions />
          <LastTransactions />
          <LastTransactions />
          <LastTransactions />
        </Card>
        <Card className="p-6">Ultimos registros</Card>
      </div>
    </>
  );
}
