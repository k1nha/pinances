import { Input } from "@/components/ui/input";
import { FormProps } from "@/shared/types";
import { useFormik } from "formik";

export class User {
  email!: string;
  password!: string;

  constructor() {
    this.email = "";
    this.password = "";
  }
}

type LoginFormProps = FormProps<User>;

export function LoginForm({
  data,
  disabled,
  onSubmit,
  validationSchema,
  id,
}: LoginFormProps) {
  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: data || new User(),
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} id={id} className={"w-full"}>
      <div className="flex flex-col">
        <label className={"text-sm text-zinc-600 mb-1"}>Email</label>
        <Input type={"email"} {...getFieldProps("email")} disabled={disabled} />
        {errors.email && touched.email && (
          <p className={"text-xs text-red-400 text-end"}>{errors.email}</p>
        )}
      </div>

      <div className="flex flex-col mt-2">
        <label className={"text-sm text-zinc-600 mb-1"}>Senha</label>
        <Input
          type={"password"}
          {...getFieldProps("password")}
          disabled={disabled}
        />
        {errors.password && touched.password && (
          <p className={"text-xs text-red-400 text-end"}>{errors.password}</p>
        )}
      </div>
    </form>
  );
}
