import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useToggleModal from "./hooks/useToggleModal";
import Navbar from "./components/layout/navbar/Navbar";
import Container from "./components/layout/container/Container";
import Footer from "./components/layout/footer/Footer";
import BlackLoadingScreen from "./components/layout/black-loading-screen/BlackLoadingScreen";
const NavbarModal = lazy(() => import("./components/layout/navbar-modal/NavbarModal"));
import routes from "./router/routes";
import navLinks from "./db/navLinks";

const router = createBrowserRouter(routes);

const AppRouter = () => {

    const [isModalOpen, toggleModal] = useToggleModal(); 

    return (
        <>
            <Container maxWidth="md" position="relative" >
                <Navbar isModalOpen={isModalOpen} toggleModal={toggleModal} />
            </Container>

            {
                isModalOpen &&
                    <Suspense fallback={<BlackLoadingScreen />}>
                        <NavbarModal links={navLinks} toggleModal={toggleModal} />
                    </Suspense>
            }

            <RouterProvider router={router} />

            <Footer />
        </>
    )
}

export default AppRouter;