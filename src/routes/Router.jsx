import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import ProfilePage from "../pages/ProfilePage"
import NotFound from "../pages/NotFound"
import { Children } from "react"
import AppLayout from "../layout/AppLayout"

const router = createBrowserRouter([
    {
        path: '/login',
        element: (
            <LoginPage />
        )
    },
    {
        path: "/",
        element: (
            <AppLayout />
        ),
        children:[
            {
                path:'',
                element: (
                    <HomePage />
                ),
            },
            {
                path:'profile',
                element: (
                    <ProfilePage />
                )
            }
        ]    
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




/*    {
        path: '/nested',
        element: (
            <div>Layout
                <Outlet />
            </div>
        ),
        children:[
            {
                path:'',
                element:<div>hi</div>,
            },{
                path:'sub-2',
                element:<h2>hello</h2>,
            },
        ]
    }, */