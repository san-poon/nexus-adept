

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className=" min-h-[90vh] flex items-center justify-center">
      {children}
    </section>
  );
}