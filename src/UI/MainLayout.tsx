import { Outlet } from "react-router"
import { Footer } from "../shared/footer/Footer"
import { Header } from "../shared/header/Header"
import {Sidebar} from '../shared/SideBar/Sidebar'


export const MainLayout = () => {
    return (
        <main className="main">
            <Header />
            <section className="container">
                <aside className="sidebarContainer">
                    <Sidebar />
                </aside>

                {/* content */}
                <section className="contentContainer">
                    <Outlet />
                </section>
            </section>

            <Footer />
        </main>
    )
}
