import { createBrowserRouter } from "react-router-dom";
import { Default } from "../layouts/default";
import { AlbumsTracks } from "../pages/AlbumsTracks";
import { Home } from "../pages/Home";
import { TrackDetails } from "../pages/TrackDetails";

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
                element: <AlbumsTracks />
            },
            {
                path:'/track/:id',
                element: <TrackDetails />
            }
        ]
    }
]) 