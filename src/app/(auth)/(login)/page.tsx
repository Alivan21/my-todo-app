import LoginForm from "@/components/form/login-form";

export default function Home() {
  return (
    <main className="flex !min-h-screen flex-col justify-center gap-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Login</h2>
        <p>Enter your email and password to continue. And enjoy the magic of our platform.</p>
      </div>
      <LoginForm />
    </main>
  );
}
