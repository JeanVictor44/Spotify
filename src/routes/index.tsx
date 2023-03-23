import { createBrowserRouter } from "react-router-dom";
import { Default } from "../layouts/default";
import { Album } from "../pages/Album/Index";
import { Home } from "../pages/Home";
import { Track } from "../pages/Track";

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
            },
            {
                path:'/track/:id',
                element: <Track />
            }
        ]
    }
]) 