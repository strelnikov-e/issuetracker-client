import { Outlet } from "react-router-dom";
import AppNavbarBase from "../components/AppNavbarBase";

export const PublicLayout = () => {

  // if (user) {
  //   return <Navigate to="/projects" replace />;
  // }

  return (
    <div className="root-layout p-0">
        <header className="mb-4">
            <AppNavbarBase/>
        </header>
        <main className="container-fluid gx-0">
            <Outlet />
        </main>
    </div>
)
};