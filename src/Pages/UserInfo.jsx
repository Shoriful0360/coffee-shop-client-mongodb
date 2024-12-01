import { useLoaderData } from "react-router";
import Navbar from "../component/Navbar";


const UserInfo = () => {
    const loadedUser=useLoaderData()
  
    return (
       <div>
        <Navbar></Navbar>
         <div className="overflow-x-auto">
            <h1 className="text-2xl font-semibold">Users:{loadedUser.length}</h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last signIn</th>
              <th>Action</th>

            </tr>
          </thead>
       {
        loadedUser.map(user=> <>
               <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user?.newUserTime?`${user.newUserTime}`:'N/A'} </td>
              <td>{user?.lastSignInTime?`${user.lastSignInTime}`:'N/A'} </td>
              <td><button className="btn">Edit</button>
              <button className="btn ml-2">x</button>
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