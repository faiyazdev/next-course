import AdminNavbar from "./_components/AdminNavbar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AdminNavbar />
      <main className="mx-auto px-4 sm:px-8 container min-h-screen py-6">
        {children}
      </main>
    </div>
  );
}
