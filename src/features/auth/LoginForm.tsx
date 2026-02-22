import { Link } from 'react-router-dom';

import { loginRequest } from '@/api/auth';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  // FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/features/auth/useAuth';
import { useForm } from '@/hooks/useForm';
import { cn } from '@/lib/utils';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const { login } = useAuth();

  const { values, handleChange, handleSubmit, isSubmitting, errors } = useForm({
    initialValues: {
      emailAddress: '',
      password: '',
    },
    validate(values) {
      if (!values.emailAddress || !values.password) {
        return 'Email and password are required.';
      }
      return null;
    },
    async onSubmit(values) {
      const response = await loginRequest({
        email_address: values.emailAddress,
        password: values.password,
      });

      login(response.token);
    },
  });

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
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
                  onChange={handleChange}
                  value={values.emailAddress}
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
                <Input
                  id="password"
                  type="password"
                  name="password"
                  required
                  onChange={handleChange}
                  value={values.password} />
              </Field>
              {errors?.base && (
                <p className="text-red-500 text-sm">
                  {errors.base}
                </p>
              )}
              <Field>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </Button>
                <FieldDescription className="text-center">
                  Don't have an account? <Link to="/sign-up">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
