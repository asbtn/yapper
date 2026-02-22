import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { userCreateRequest } from '@/api/users';
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
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useForm } from '@/hooks/useForm';

// TODO: Refactor and DRY - similar logic to LoginForm
export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, isSubmitting, errors } = useForm({
    initialValues: {
      username: '',
      emailAddress: '',
      password: '',
      passwordConfirmation: '',
    },
    validate(values) {
      if (Object.values(values).some((value: string) => !value)) {
        return ('All fields are required.');
      }
      return null;
    },
    async onSubmit(values) {
      await userCreateRequest({
        user: {
          username: values.username,
          email_address: values.emailAddress,
          password: values.password,
          password_confirmation: values.passwordConfirmation
        }
      });
      // TODO: redirect to success screen w/ info about confirmation email when implemented
      navigate('/');

    },
  });

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email-address">Email</FieldLabel>
              <Input
                id="email-address"
                type="email"
                placeholder="m@example.com"
                name="emailAddress"
                required
                value={values.emailAddress}
                onChange={handleChange}
              />
            </Field>
            {errors?.email_address && <FieldError>{errors.email_address}</FieldError>}

            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input id="username" type="text" placeholder="example123" name="username" required value={values.username} onChange={handleChange} />
              {errors?.username ?
                <FieldError>{errors.username}</FieldError> : <FieldDescription>Only alphanumeric characters.</FieldDescription>
              }
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" name="password" required value={values.password} onChange={handleChange} />
              {errors?.password ?
                <FieldError>{errors.password}</FieldError> : <FieldDescription> Must be at least 6 characters long. </FieldDescription>}

            </Field>

            <Field>
              <FieldLabel htmlFor="password-confirmation">
                Confirm Password
              </FieldLabel>
              <Input id="password-confirmation" type="password" name="passwordConfirmation" required value={values.passwordConfirmation} onChange={handleChange} />
            </Field>
            {errors?.[''] && (
              <p className="text-red-500 text-sm">
                {errors['']}
              </p>
            )}
            <FieldGroup>
              <Field>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Creating...' : 'Create account'}
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link to="/sign-in">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
