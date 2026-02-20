import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center p-6 md:p-10 w-full min-h-svh">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
