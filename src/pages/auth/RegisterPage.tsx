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
import { registerschema, type RegisterSchema } from "@/schemas/auth";
import { Link, useNavigate } from "react-router";
import { register } from "@/lib/auth";

export function RegisterPage() {
  const navigate = useNavigate();
  const {
    register: registerZod,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerschema),
  });

  const onSubmit = async (data: RegisterSchema) => {
    await register(data);
    navigate("/login", { replace: true });
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Register a new account</CardTitle>
        <CardDescription>
          Enter your username email below to create your account
        </CardDescription>
        <CardAction>
          <Link to="/login">
            <Button variant="link">Sign In</Button>
          </Link>
        </CardAction>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="pb-4">
          <div className="flex flex-col gap-6">
            <Field>
              <FieldLabel htmlFor="input-field-name">Username</FieldLabel>
              <Input
                id="input-field-name"
                type="text"
                {...registerZod("name")}
                placeholder="Jonh doe"
              />
              {errors.name && (
                <FieldDescription>{errors.name.message}</FieldDescription>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="input-field-email">Email</FieldLabel>
              <Input
                id="input-field-email"
                type="text"
                {...registerZod("email")}
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
                {...registerZod("password")}
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
            Register
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
