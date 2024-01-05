import { Input, Label } from "@/components/ui";
import { FormProps } from "@/shared/types";
import { useFormik } from "formik";

export class PersonalInfo {
  name!: string;
  email!: string;
  contact!: string;
}

type PersonalInfoFormProps = FormProps<PersonalInfo>;

export function PersonalInfoForm({
  onSubmit,
  data,
  disabled,
  id,
  validationSchema,
}: PersonalInfoFormProps) {
  const { errors, getFieldProps, handleSubmit } = useFormik({
    initialValues: data || new PersonalInfo(),
    onSubmit,
    validationSchema,
  });

  return (
    <form id={id} onSubmit={handleSubmit}>
      <div className="my-4">
        <Label>Nome</Label>
        <Input
          type="text"
          disabled={disabled}
          placeholder="Digite seu nome"
          {...getFieldProps("name")}
        />
      </div>

      <div className="mb-4">
        <Label>Email</Label>
        <Input
          type="text"
          placeholder="Digite seu nome"
          {...getFieldProps("email")}
        />
      </div>

      <div className="mb-4">
        <Label>Contato</Label>
        <Input
          type="text"
          placeholder="Número de contato"
          {...getFieldProps("contact")}
        />
      </div>
    </form>
  );
}
