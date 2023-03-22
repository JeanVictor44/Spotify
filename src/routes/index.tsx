import { createBrowserRouter } from "react-router-dom";
import { Default } from "../layouts/default";
import { Album } from "../pages/Album/Index";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/album/:id',
                element: <Album />
            }
        ]
    }
]) 