import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import GameDetails from "../Pages/GameDetails";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";
import PrivateRouts from "./PrivateRouts";
import AllGame from "../Pages/AllGame";
import ForgetPassword from "../Pages/ForgetPassword";
import UpdateProfile from "../Pages/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage";
import AboutUs from "../Pages/AboutUs";
import Loading from "../Pages/Loading";
import ContactUs from "../Pages/ContactUs";
import Support from "../Pages/Support";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/appdata.json'),
                hydrateFallbackElement: <Loading></Loading>,
            },


        ]
    },
    {
        path: '/about-us',
        element: <AboutUs></AboutUs>,
    },
    {
        path: '/contact-us',
        element: <ContactUs></ContactUs>,
    },
    {
        path: '/support',
        element: <Support></Support>,
    },
    {
        path: '/all-games',
        element: <AllGame></AllGame>,
        loader: () => fetch('/appdata.json'),
        hydrateFallbackElement: <Loading></Loading>,
    },
    {
        path: '/game-details/:id',
        element:
            <GameDetails></GameDetails>,

        loader: () => fetch('/appdata.json'),
        hydrateFallbackElement: <Loading></Loading>,
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: '/auth/register',
                element: <Register></Register>,
            },

            {
                path: '/auth/forget-password',
                element: <ForgetPassword></ForgetPassword>,
            },
            {
                path: '/auth/my-profile',
                element: <PrivateRouts>
                    <MyProfile></MyProfile>
                </PrivateRouts>,
            },
            {
                path: '/auth/update-profile',
                element: <UpdateProfile></UpdateProfile>,
            },
        ]
    },
    {
        path: '/apps',
        element: <h2>Apps Layout</h2>,
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>,
    },
])
export default router