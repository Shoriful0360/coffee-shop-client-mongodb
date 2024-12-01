import React from 'react';
import { ImPriceTags } from 'react-icons/im';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CardCoffee = ({coffee,setCoffes,coffees}) => {
    const {name,chef,price,photo,_id}=coffee
    const handleDelete=(_id)=>{
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             
              fetch(`http://localhost:5000/coffees/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      const remainingCoffees=coffees.filter(coffee=>coffee._id !==_id)
                      setCoffes(remainingCoffees)
                }
              
               
            })
            }
          });
       

    }

    return (
        <div className="card justify-around items-center px-8 py-7 flex-row bg-base-100  shadow-xl">
        <figure className='flex-1'>
          <img
            src={photo}
            alt="Shoes" />
        </figure>
        <div className="card-body flex-1">
        <h1><span className='text-xl font-semibold'>Name:</span> <small className='text-base font-semibold'>{name}</small></h1>
        <h1><span className='text-xl font-semibold'>Chef:</span> <small className='text-base font-semibold'>{chef}</small></h1>
        <h1><span className='text-xl font-semibold'>Price:</span> <small className='text-base font-semibold'>{price}</small></h1>
        </div>
       
        <div className="join flex-1 *:w-1/2 ml-0 gap-5 join-vertical">
  <button className="btn join-item">view</button>
 <Link to={`/updateCoffee/${_id}`}> <button className="btn join-item">Edit</button></Link>
  <button onClick={()=>handleDelete(_id)} className="btn join-item">Delete</button>
</div>
        
      </div>
    );
};

export default CardCoffee;