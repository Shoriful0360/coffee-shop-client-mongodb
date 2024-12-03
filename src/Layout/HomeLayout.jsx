import { useLoaderData } from "react-router";
import Banner from "../component/Banner";
import Navbar from "../component/Navbar";
import PopularProduct from "../component/PopularProduct";
import Quality from "../component/Quality";
import { useContext, useState } from "react";
import { authContext } from "../Provider/AuthProvider";


const HomeLayout = () => {
  const{coffees}=useContext(authContext)
  // const loadedCoffees=useLoaderData()
  // const [coffees,setCoffes]=useState(loadedCoffees)
  // console.log(loadedCoffees)
    return (
        <div>
          <header>
            <Navbar></Navbar>
           
          </header>
          <main className="mt-10 ">
          <Banner></Banner>
          <Quality></Quality>
          <PopularProduct coffees={coffees}  ></PopularProduct>
          </main>
          <footer></footer>
        </div>
    );
};

export default HomeLayout;