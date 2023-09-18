import { MajesticonsDotsVertical } from "@/shared/icons";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui";

type ActionsTableProps = {
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
};

export function ActionsTable({ onDelete, onUpdate }: ActionsTableProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Abrir menu</span>
          <MajesticonsDotsVertical height={18} width={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Ações</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => onDelete("2")}>
          Atualizar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onDelete("2")}>
          Deletar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
