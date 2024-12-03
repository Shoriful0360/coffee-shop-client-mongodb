import { useLoaderData } from "react-router";
import Navbar from "../component/Navbar";
import { useState } from "react";
import Swal from "sweetalert2";


const UserInfo = () => {
    const loadedUser=useLoaderData()
    const [users,setUsers]=useState(loadedUser)
   
    
    const handleDelete=(_id)=>{
      console.log(_id)
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
         
          fetch( `http://localhost:5000/users/${_id}`,{
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
                  const remaingingUsers=users.filter(user=>user._id !==_id);
                  setUsers(remaingingUsers)
            }
          
           
        })
        }
      });


    }
  
    return (
       <div>
        <Navbar></Navbar>
         <div className="overflow-x-auto">
            <h1 className="text-2xl font-semibold">Users:{users.length}</h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>{}</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last signIn</th>
              <th>Action</th>

            </tr>
          </thead>
       {
        users.map((user,idx)=> <>
               <tbody>
            {/* row 1 */}
            <tr>
              <th>{idx+1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user?.newUserTime?`${user.newUserTime}`:'N/A'} </td>
              <td>{user?.lastSignInTime?`${user.lastSignInTime}`:'N/A'} </td>
              <td><button className="btn">Edit</button>
              <button onClick={()=>handleDelete(user._id)} className="btn ml-2">x</button>
              </td>
              <td></td>
            </tr>
          
          </tbody>
        </>)
       }
        </table>
      </div>
       </div>
    );
};

export default UserInfo;