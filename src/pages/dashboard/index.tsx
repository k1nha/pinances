import { LastTransactions } from "@/components/transactions";
import {
  Button,
  Card,
  CardTitle
} from "@/components/ui";
import { SolarDollarLineDuotone } from "@/shared/icons";
import { UserLayout } from "@/shared/layouts";

export default function Dashboard() {
  return (
    <UserLayout>
      <section className={"p-5 flex flex-col gap-4 w-full md:w-[calc(100%-14rem)]"}>
        <div className="flex justify-between">
          <h1 className={"text-2xl font-semibold"}>Dashboard</h1>

          <Button>ok</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 md:mt-20">
          <Card className={"p-6"}>
            <CardTitle className={"flex justify-between items-center"}>
              <span>Em conta</span>
              <SolarDollarLineDuotone />
            </CardTitle>

            <h3 className="text-2xl font-bold mt-2 overflow-hidden">
              R$4500,00
            </h3>
          </Card>
          <Card className={"p-6"}>
            <CardTitle className={"flex justify-between items-center"}>
              <span>Entradas</span>
              <SolarDollarLineDuotone />
            </CardTitle>

            <h3 className="text-2xl font-bold mt-2 overflow-hidden">+12</h3>
          </Card>
          <Card className={"p-6"}>
            <CardTitle className={"flex justify-between items-center"}>
              <span>Saidas</span>
              <SolarDollarLineDuotone />
            </CardTitle>

            <h3 className="text-2xl font-bold mt-2 overflow-hidden">-24</h3>
          </Card>
          <Card className={"p-6"}>
            <CardTitle className={"flex justify-between items-center"}>
              <span>Em conta</span>
              <SolarDollarLineDuotone />
            </CardTitle>

            <h3 className="text-2xl font-bold mt-2 overflow-hidden">
              R$4500,00
            </h3>
          </Card>
        </div>

        <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
          <Card className={"p-6 flex flex-col gap-4"}>
            <div className="">
              <h1 className={"font-semibold"}>Ultimos registros</h1>
              <span className={"text-sm text-slate-500"}>
                Você fez 30 transações no último mês
              </span>
            </div>

            <LastTransactions />
            <LastTransactions />
            <LastTransactions />
            <LastTransactions />
          </Card>
          <Card className={"p-6"}>Ultimos registros</Card>
        </div>
      </section>
    </UserLayout>
  );
}
