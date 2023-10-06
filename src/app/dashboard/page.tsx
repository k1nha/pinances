import { Button } from "@/components/ui";
import { DashboardModule } from "@/modules/pages/dashboard/dashboard.module";

export default function Dashboard() {
  return (
    <section
      className={"p-5 flex flex-col gap-4 w-full md:w-[calc(100%-14rem)]"}>
      <div className="flex justify-between">
        <h1 className={"text-2xl font-semibold"}>Dashboard</h1>

        <Button disabled>ok</Button>
      </div>

      <DashboardModule />
    </section>
  );
}
