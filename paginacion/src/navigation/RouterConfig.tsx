import { createBrowserRouter } from "react-router-dom";
//import Login from "../pages/user/login";
import Home from "../pages/home.tsx"


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },

    /*
    {
        path:"/login",
        element:<Login/>,
    },*/
   

]);