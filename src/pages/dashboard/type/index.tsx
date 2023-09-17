import { TypeTransaction } from "@/components/transactions";
import { Card } from "@/components/ui";
import { Type } from "@/modules/user";
import { UserLayout } from "@/shared/layouts";

export default function Types() {
  return (
    <UserLayout>
      <section
        className={"p-5 flex flex-col gap-4 w-full md:w-[calc(100%-14rem)]"}>
        <div>
          <h1 className={"text-2xl font-semibold"}>Tipos</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className={"p-6"}>
            <h1 className={"font-semibold"}>Entradas</h1>
            <p className={"text-sm text-slate-500"}>Todas suas entradas</p>

            <TypeTransaction />
            <TypeTransaction />
            <TypeTransaction />
            <TypeTransaction />
          </Card>

          <Card className={"p-6"}>
            <h1 className={"font-semibold"}>Saídas</h1>
            <p className={"text-sm text-slate-500"}>Todas suas saídas</p>

            <TypeTransaction />
            <TypeTransaction />
            <TypeTransaction />
            <TypeTransaction />
          </Card>
        </div>

        <div className="flex items-center justify-center md:mb-0 mb-16">
          <Card className={"p-6"}>
            <div className="">
              <h1 className={"font-semibold"}>Adicionar novos tipos</h1>
              <p className={"text-sm text-slate-500"}>
                Adicione novos tipos para transações
              </p>
            </div>

            <Type />
          </Card>
        </div>
      </section>
    </UserLayout>
  );
}
