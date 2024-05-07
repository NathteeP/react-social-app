import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import ProfilePage from "../pages/ProfilePage"
import NotFound from "../pages/NotFound"

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <HomePage />
        )
    },
    {
        path: '/login',
        element: (
            <LoginPage />
        )
    },
    {
        path: '/profile',
        element: (
            <ProfilePage />
        )
    },
    {
        path: '*',
        element: (
            <NotFound />
        )
    }
])
function Router () {
    return <RouterProvider router={router} />
}

export default Router