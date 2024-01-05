import {
  SolarCardTransferOutline,
  SolarChart2Linear,
  SolarPieChart2Linear,
  SolarUserCheckRoundedBroken,
} from "../icons";

type Route = {
  icon?: React.ReactNode;
  name: string;
  link: string;
};

export const routes: Route[] = [
  {
    icon: <SolarChart2Linear height={22} width={22} />,
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <SolarCardTransferOutline height={22} width={22} />,
    link: "/dashboard/transactions",
    name: "Transações",
  },
  {
    icon: <SolarPieChart2Linear height={22} width={22} />,
    link: "/dashboard/category",
    name: "Categorias",
  },
  {
    icon: <SolarUserCheckRoundedBroken height={22} width={22} />,
    link: "/dashboard/profile",
    name: "Perfil",
  },
];
