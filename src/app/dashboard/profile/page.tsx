"use client";
import { Card } from "@/components/ui";
import { PersonalInfo } from "@/modules/user";

export default function ProfilePage() {
  return (
    <section className="p-5 flex flex-col gap-4 w-full md:w-[calc(100%-14rem)]">
      <div>
        <h1 className="text-2xl font-semibold">Perfil</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <h1 className="font-semibold">Informações Pessoais</h1>
          <p className="text-sm text-slate-500">
            Edite suas informações pessoais
          </p>

          <PersonalInfo />
        </Card>

        <Card className="p-6">
          <h1 className="font-semibold">Activity Logs</h1>
        </Card>
      </div>
    </section>
  );
}
