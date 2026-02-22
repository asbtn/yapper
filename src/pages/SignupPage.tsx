import { SignupForm } from '@/features/auth/SignupForm';

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center p-6 md:p-10 w-full min-h-svh">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}
