import {
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { FormProps } from "@/shared/types";
import { useFormik } from "formik";
import { useEffect } from "react";

export class TypeClass {
  name_type!: string;
  finance_type!: string;

  constructor() {
    this.name_type = "";
    this.finance_type = "";
  }
}

type TypeFormProps = FormProps<TypeClass>;

export function TypeForm({
  onSubmit,
  data,
  disabled,
  id,
  validationSchema,
}: TypeFormProps) {
  const { errors, touched, handleSubmit, getFieldProps, values } =
    useFormik({
      initialValues: data || new TypeClass(),
      onSubmit,
      validationSchema,
    });

  return (
    <form id={id} onSubmit={handleSubmit}>
      <div className="flex flex-col mt-4 gap-2">
        <Label htmlFor="type">Selecione o tipo da categoria</Label>
        <Select
          onValueChange={(e) => (values.finance_type = e)}
          disabled={disabled}>
          <SelectTrigger>
            <SelectValue placeholder={"Selecione o tipo"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tipo</SelectLabel>
              <SelectItem value={"entrada"}>Entrada</SelectItem>
              <SelectItem value={"saida"}>Saída</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors.finance_type && touched.finance_type && (
          <p className={"text-xs text-red-400 text-end"}>
            {errors.finance_type}
          </p>
        )}
      </div>

      <div className="flex flex-col mt-4 gap-2">
        <Label>Nome da categoria</Label>
        <Input
          type={"text"}
          {...getFieldProps("name_type")}
          disabled={disabled}
        />
        {errors.name_type && touched.name_type && (
          <p className={"text-xs text-red-400 text-end"}>{errors.name_type}</p>
        )}
      </div>
    </form>
  );
}
