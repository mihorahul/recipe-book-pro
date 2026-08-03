import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <Navbar />

        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
