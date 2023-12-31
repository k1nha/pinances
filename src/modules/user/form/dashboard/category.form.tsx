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

export class CategoryClass {
  name_type!: string;
  finance_type!: string;

  constructor() {
    this.name_type = "";
    this.finance_type = "";
  }
}

type CategoryFormProps = FormProps<CategoryClass>;

export function CategoryForm({
  onSubmit,
  data,
  disabled,
  id,
  validationSchema,
}: CategoryFormProps) {
  const { errors, touched, handleSubmit, getFieldProps, values, resetForm } =
    useFormik({
      initialValues: data || new CategoryClass(),
      onSubmit: SubmitForm,
      validationSchema,
    });

  function SubmitForm(data: CategoryClass) {
    onSubmit(data);
    resetForm();
  }

  return (
    <form id={id} onSubmit={handleSubmit}>
      <div className="flex flex-col mt-4 gap-2">
        <Label htmlFor="type">Selecione o tipo da categoria</Label>
        <Select
          onValueChange={(e) => (values.finance_type = e)}
          disabled={disabled}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tipo</SelectLabel>
              <SelectItem value="ENTRADA">Entrada</SelectItem>
              <SelectItem value="SAIDA">Saída</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors.finance_type && touched.finance_type && (
          <p className="text-xs text-red-400 text-end">{errors.finance_type}</p>
        )}
      </div>

      <div className="flex flex-col mt-4 gap-2">
        <Label>Nome da categoria</Label>
        <Input
          type="text"
          placeholder="Digite um nome para categoria"
          {...getFieldProps("name_type")}
          disabled={disabled}
        />
        {errors.name_type && touched.name_type && (
          <p className="text-xs text-red-400 text-end">{errors.name_type}</p>
        )}
      </div>
    </form>
  );
}
