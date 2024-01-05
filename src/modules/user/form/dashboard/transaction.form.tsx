"use client";
import { Categories } from "@/app/dashboard/category/page";
import {
  Button,
  Calendar,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { cn } from "@/lib/shadcn";
import { FormProps } from "@/shared/types";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useFormik } from "formik";
import { ChangeEvent, useState } from "react";

export class TransactionClass {
  transaction_type!: string;
  value!: number;
  description!: string;
  finance_date!: string;

  constructor() {
    this.description = "";
    this.finance_date = "";
    this.transaction_type = "";
    this.value = 0;
  }
}

type TransactionFormProps = FormProps<TransactionClass> & {
  typesDATA: Categories[];
};

export function TransactionForm({
  onSubmit,
  data,
  disabled,
  id,
  validationSchema,
  typesDATA,
}: TransactionFormProps) {
  const [calendarDate, setCalendarDate] = useState<Date | undefined>(
    new Date()
  );
  const [type, setType] = useState<string>("");
  const [value, setValue] = useState<string>("R$ ");

  const formatCurrency = (inputValue: string): string => {
    let formattedValue = inputValue.replace(/\D/g, "");
    formattedValue = (Number(formattedValue) / 100)
      .toFixed(2)
      .replace(".", ",");
    return `R$ ${formattedValue}`;
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    const formattedValue = formatCurrency(inputValue);
    setValue(formattedValue);
    values.value = +event.target.value
      .replace("R$ ", "")
      .replace(",", "")
      .replace(/^0+/, "");
  };

  function setDate(e: any) {
    setCalendarDate(e);
    values.finance_date = e;
  }

  const { errors, getFieldProps, handleSubmit, values } = useFormik({
    initialValues: data || new TransactionClass(),
    onSubmit,
    validationSchema,
  });

  return (
    <form id={id} onSubmit={handleSubmit}>
      <div>
        <div className="mb-2">
          <Label>Selecione o tipo da transação</Label>
          <Select onValueChange={(e) => setType(e)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo da transação" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="ENTRADA">Entrada</SelectItem>
                <SelectItem value="SAIDA">Saida</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-2">
          <Label>Selecione uma categoria</Label>
          <Select onValueChange={(e) => (values.transaction_type = e)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {typesDATA
                  .filter(({ finance_type }) => finance_type === type)
                  .map((type, i) => (
                    <SelectItem value={type.id} key={i}>
                      {type.name_type}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
          <div className="mb-2">
            <Label>Valor</Label>
            <Input
              value={value}
              onChange={handleInputChange}
              placeholder="Digite um valor"
            />
          </div>

          <div className="mb-2">
            <Label>Selecione uma data</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !calendarDate && "text-muted-foreground"
                  )}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {calendarDate ? (
                    format(calendarDate, "PPP", { locale: ptBR })
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={calendarDate}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="">
          <Label>Descrição</Label>
          <Input
            type="text"
            {...getFieldProps("description")}
            disabled={disabled}
            placeholder="Opicional: Digite uma descrição"
          />
        </div>
      </div>
    </form>
  );
}
