/* eslint-disable react/prop-types */
import { BsCupHot } from "react-icons/bs";
import { Link } from "react-router";
import CardCoffee from "./CardCoffee";



const PopularProduct = ({coffees}) => {
 

    return (
        <div>
            <div className="text-center">
                <p>---slip & Savor</p>
                <h2 className="font-bold text-[#331A15]">Our Popular Product</h2>
            <Link to={'/addCoffee'}>    <button className="bg-[#E3B577] btn"><span>Add coffee</span><BsCupHot></BsCupHot></button></Link>
            </div>
           <div className="grid gap-5 sm:grid-cols-2">
           {
                coffees.map(coffee=><CardCoffee   key={coffee._id} coffee={coffee}></CardCoffee>)
            }
           </div>
        </div>
    );
};

export default PopularProduct;