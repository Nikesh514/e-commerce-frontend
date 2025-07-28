import { yupResolver } from "@hookform/resolvers/yup";
import type { ILogin } from "../../../types/auth.types";
import Button from "../../common/button";
import Input from "../../common/inputs/input";
import { useForm, FormProvider } from "react-hook-form";
import { loginSchema } from "../../../schema/auth.schema";
import { login } from "../../../api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "all",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Login successful", data);
      navigate('/')
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  const onSubmit = async (data: ILogin) => {
    console.log("form submitted", data);
     mutate(data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-10 "
        >
          <div className="flex flex-col gap-4">
            {/* email */}
            <Input
              id={"email"}
              label={"Email"}
              name={"email"}
              placeholder={"example@gmail.com"}
              type={"email"}
              rules={{
                required: "Email is required",
              }}
              required
            />

            {/* password */}
            <Input
              id={"password"}
              label={"Password"}
              name={"password"}
              placeholder={"xxxxxxxxxx"}
              type={"password"}
              rules={{
                required: "Password is required",
                minLength: 6,
              }}
              required
            />
          </div>

          <Button
            isDisabled={isPending}
            label={isPending ? "Looging In.." : "Login"}
            type="submit"
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
