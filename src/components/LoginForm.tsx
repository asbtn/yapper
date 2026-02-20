import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  // FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { useState } from "react"
import { Input } from "@/components/ui/input";
import { useAuth } from "@/auth/useAuth";
import { loginRequest } from "@/api/auth";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const email_address = formData.get("emailAddress") as string | null;
    const password = formData.get("password") as string | null;

    if (!email_address || !password) {
      setError("Email and password are required.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await loginRequest({ email_address, password });
      login(response.token);
    } catch (error) {
      setError("Invalid email or password.");
      console.log(error)
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="emailAddress">Email</FieldLabel>
                <Input
                  id="emailAddress"
                  type="email"
                  placeholder="m@example.com"
                  name="emailAddress"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  {/* <a
                    href="#"
                    className="inline-block ml-auto text-sm hover:underline underline-offset-4"
                  >
                    Forgot your password?
                  </a> */}
                </div>
                <Input id="password" type="password" name="password" required />
              </Field>
              {error && (
                <p className="text-red-500 text-sm">
                  {error}
                </p>
              )}
              <Field>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>

                {/* <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription> */}
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
