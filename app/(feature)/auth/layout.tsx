

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      {children}
    </section>
  );
}