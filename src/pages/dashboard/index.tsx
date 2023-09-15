import { Button, Card, CardContent, CardTitle } from "@/components/ui";
import { UserLayout } from "@/shared/layouts";
import { SVGProps } from "react";

export default function Dashboard() {
  return (
    <UserLayout>
      <section className={"p-5 flex flex-col gap-4"}>
        <div className="flex justify-between">
          <h1 className={"text-2xl font-semibold"}>Dashboard</h1>

          <Button>ok</Button>
        </div>

        <div className=" gap-4">
          <Card className={"p-6"}>
            <CardTitle className={"flex justify-between items-center"}>
              <span>Em conta</span>
              <SolarDollarLineDuotone />
            </CardTitle>

            <h3 className="text-2xl font-bold mt-2">R$ 4500,00</h3>
          </Card>
        </div>
      </section>
    </UserLayout>
  );
}

export function SolarDollarLineDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" opacity=".5"></circle>
        <path
          strokeLinecap="round"
          d="M12 6v12m3-8.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"></path>
      </g>
    </svg>
  );
}
