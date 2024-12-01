import { useLoaderData } from "react-router";
import Banner from "../component/Banner";
import Navbar from "../component/Navbar";
import PopularProduct from "../component/PopularProduct";
import Quality from "../component/Quality";
import { useState } from "react";


const HomeLayout = () => {
  const loadedCoffees=useLoaderData()
  const [coffees,setCoffes]=useState(loadedCoffees)
  // console.log(loadedCoffees)
    return (
        <div>
          <header>
            <Navbar></Navbar>
           
          </header>
          <main className="mt-10 ">
          <Banner></Banner>
          <Quality></Quality>
          <PopularProduct coffees={coffees} setCoffes={setCoffes} ></PopularProduct>
          </main>
          <footer></footer>
        </div>
    );
};

export default HomeLayout;