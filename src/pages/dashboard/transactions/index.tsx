import { Card } from "@/components/ui";
import { UserLayout } from "@/shared/layouts";

export default function Transaction() {
  return (
    <UserLayout>
      <section
        className={"p-5 flex flex-col gap-4 w-full md:w-[calc(100%-14rem)]"}>
        <div>
          <h1 className={"text-2xl font-semibold"}>Transações</h1>
        </div>
      </section>
    </UserLayout>
  );
}
