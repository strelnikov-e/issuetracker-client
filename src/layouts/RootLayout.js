import { NavLink, Outlet } from "react-router-dom"
import AppNavbar from "../components/AppNavbar"
import Breadcrumbs from "../components/Breadcrumbs"

export default function RootLayout() {

    return (
        <div className="root-layout">
            <header className="mb-4">
                <AppNavbar/>
            </header>
            <main className="container container-lg">
                <Breadcrumbs/>
                <Outlet />
            </main>
        </div>
    )
}