import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-4 text-lg">
      <Outlet />
    </main>
  );
};
