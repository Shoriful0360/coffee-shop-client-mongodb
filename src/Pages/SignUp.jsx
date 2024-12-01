import { useContext } from "react";
import Navbar from "../component/Navbar";
import { authContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";


const SignUp = () => {
  const navigate=useNavigate()
    const {createUser,name}=useContext(authContext)
    console.log(name)
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password)
       
        createUser(email,password)
        .then(result=>{
            console.log(result)
            const newUserTime=result?.user?.metadata?.creationTime
            const newUser={name,email,newUserTime}
            fetch('http://localhost:5000/users',{
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(newUser,newUserTime)
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data)
            })
            navigate('/')
        })
        .catch((error)=>{
            console.log(error.message)
        })

    }
    return (
        
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp Now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
              <label className="label">
                  <span className="label-text">password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;