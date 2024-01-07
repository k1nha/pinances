import { Input, Label } from "@/components/ui";
import { FormProps } from "@/shared/types";
import { useFormik } from "formik";

export class ResetPassword {
  currentPassword!: string;
  newPassword!: string;
  confirmNewPassword!: string;
}

type ResetPasswordFormProps = FormProps<ResetPassword>;

export function ResetPasswordForm({
  onSubmit,
  data,
  disabled,
  id,
  validationSchema,
}: ResetPasswordFormProps) {
  const { errors, getFieldProps, handleSubmit } = useFormik({
    initialValues: data || new ResetPassword(),
    onSubmit,
    validationSchema,
  });

  return (
    <form id={id} onSubmit={handleSubmit}>
      <div className="">
        <Label>Senha atual</Label>
        <Input
          type="text"
          placeholder="Digite sua senha atual"
          disabled={disabled}
          {...getFieldProps("currentPassword")}
        />
      </div>

      <div className="">
        <Label>Nova senha</Label>
        <Input
          type="text"
          placeholder="Digite sua nova senha"
          disabled={disabled}
          {...getFieldProps("newPassword")}
        />
      </div>

      <div className="">
        <Label>Confirme sua nova senha</Label>
        <Input
          type="text"
          placeholder="Confirme sua nova senha"
          disabled={disabled}
          {...getFieldProps("confirmNewPassword")}
        />
      </div>
    </form>
  );
}
