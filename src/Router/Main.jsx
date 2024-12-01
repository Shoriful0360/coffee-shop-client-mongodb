import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import UserInfo from "../Pages/UserInfo";

const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        loader:()=>fetch('http://localhost:5000/coffees')

    },
    {
        path:'/addCoffee',
        element:<AddCoffee></AddCoffee>
    },
    {
        path:'/updateCoffee/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
    },
    {
        path:'/signIn',
        element:<SignIn></SignIn>
    },
    {
        path:'/signUp',
        element:<SignUp></SignUp>
    },
    {
        path:'/users',
        element:<UserInfo></UserInfo>,
        loader:()=>fetch('http://localhost:5000/users')
    }

])
export default router