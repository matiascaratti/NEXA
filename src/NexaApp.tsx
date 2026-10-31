import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export const NexaApp = () => {
    return (
        <>
            <RouterProvider router={appRouter}></RouterProvider>
        </>
    )
}