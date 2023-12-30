import { SolarDollarLineDuotone } from "@/shared/icons";
import { Card, CardTitle } from "../ui";

interface InfoCardProps {
  title: string;
  icon: JSX.Element | React.ReactNode;
  value: string;
}

export function InfoCard({ icon, title, value }: InfoCardProps) {
  return (
    <Card className="p-6">
      <CardTitle className="flex justify-between items-center">
        <span>{title}</span>
        {icon}
      </CardTitle>

      <h3 className="text-2xl font-bold mt-2 overflow-hidden">{value}</h3>
    </Card>
  );
}
