import Home from "../pages/Home";
import Loading from "../components/Loading";
// import About from "../pages/About";
// import User from "../pages/User";
import React, {lazy} from "react";
import {Navigate} from "react-router-dom";

const About = lazy(() => import("../pages/About"))
const User = lazy(() => import("../pages/User"))
const Manage = lazy(() => import("../pages/Manage"))
const Page1 = lazy(() => import("../pages/Page1"))
const Page2 = lazy(() => import("../pages/Page2"))

const routes = [
    {
        path: "/",
        element: <Navigate to="./home" />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: <Loading comp={<About />} page="About" />
    },
    {
        path: "/user",
        element: <Loading comp={<User />} page="User" />
    },
    {
        path: "/manage",
        element: <Navigate to="./page1" />
        // element: <Loading comp={<Manage />} page="Mser" />
    },
    {
        path: "/manage",
        element: <Loading comp={<Manage />} page="Mser" />,
        children: [
            {
                path: "/manage/page1",
                element: <Loading comp={<Page1 />} page="Page1" />
            },
            {
                path: "/manage/page2",
                element: <Loading comp={<Page2 />} page="Page2" />
            }
        ]
    }
]
export default routes