import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/partials/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <ModeToggle />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
