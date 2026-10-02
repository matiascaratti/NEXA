import { Navbar } from "./shared/components/Navbar/Navbar";
import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export const CompritasApp = () => {
    return (
        <>
            <Navbar></Navbar>
            <RouterProvider router={appRouter}></RouterProvider>
        </>
    )
}