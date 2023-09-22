import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "../ui";

type ActionsTableProps = {
  icon?: React.ReactNode;
  onClick?: () => void;
  title?: string;
  description?: string | React.ReactNode;
};

export function ActionsTable({
  icon,
  onClick,
  description,
  title,
}: ActionsTableProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild id={"delete"}>
        {icon}
      </AlertDialogTrigger>

      {/* Delete */}
      <AlertDialogContent id={"delete"}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={onClick}>Confirmar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
