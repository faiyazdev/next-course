import Navbar from "./_components/ConsumerNavbar";

export default function ConsumerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <main className="mx-auto px-4 sm:px-8 container min-h-screen">
        {children}
      </main>
    </div>
  );
}
