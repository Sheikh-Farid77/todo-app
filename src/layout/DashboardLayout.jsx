import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({children}) {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />

        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Header />
          <div className="mx-auto max-w-7xl p-6">{children}</div>
        </main>
      </div>
    </>
  );
}
