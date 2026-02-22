import { useState } from 'react';

import type { RailsError } from '@/types/railsError';

type UseFormOptions<Values extends Record<string, string>> = {
  initialValues: Values;
  validate?: (values: Values) => string | null;
  onSubmit: (values: Values) => Promise<void> | void;
};

export function useForm<Values extends Record<string, string>>(
  options: UseFormOptions<Values>
) {
  const { initialValues, onSubmit } = options;

  const [values, setValues] = useState<Values>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string> | null>(null);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setValues(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors(null);

    setIsSubmitting(true);

    try {
      await onSubmit(values);
    } catch (err: unknown) {
      const railsError = (err as { errors: RailsError }).errors as RailsError;

      if (railsError?.details) {
        setErrors(railsError.details);
      } else {
        setErrors({ '': 'Something went wrong.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    values,
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
    setErrors,
    setValues,
  };
}
