import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Container from "./components/layout/container/Container";
import routes from "./router/routes";

const router = createBrowserRouter(routes);

const AppRouter = () => {
    return (
        <>
            <Container maxWidth="45rem">
                <Header />
            </Container>

            <RouterProvider router={router} />
        </>
    )
}

export default AppRouter;