import { ModeToggle } from "@/components/mode-toggle";
import { Navbar } from "@/components/partials/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="">
      {/* <header className="border-b p-4">Header</header> */}
      <Navbar />

      <ModeToggle />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
