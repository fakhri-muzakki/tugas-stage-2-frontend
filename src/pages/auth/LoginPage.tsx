import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { loginschema, type LoginSchema } from "@/schemas/auth";
import { Link, useNavigate } from "react-router";
import { login } from "@/lib/auth";
import { useAuth } from "@/hooks/useAuth";

export function LoginPage() {
  const { login: saveLogin } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginschema),
  });

  const onSubmit = async (data: LoginSchema) => {
    const { accessToken, user } = await login(data);
    saveLogin({ accessToken, user });
    navigate("/dashboard", { replace: true });
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Link to="/register">
            <Button variant="link">Sign Up</Button>
          </Link>
        </CardAction>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="pb-4">
          <div className="flex flex-col gap-6">
            <Field>
              <FieldLabel htmlFor="input-field-email">Email</FieldLabel>
              <Input
                id="input-field-email"
                type="text"
                {...register("email")}
                placeholder="jonh@gmail.com"
              />
              {errors.email && (
                <FieldDescription>{errors.email.message}</FieldDescription>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="input-field-email">Password</FieldLabel>
              <Input
                id="input-field-password"
                type="password"
                {...register("password")}
                placeholder=""
              />
              {errors.password && (
                <FieldDescription>{errors.password.message}</FieldDescription>
              )}
            </Field>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
