import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router";


const SignIn = () => {
  const {userLogin}=useContext(authContext)
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value;
    userLogin(email,password)
    .then(result=>{
      console.log(result.user)
      const lastSignInTime=result?.user?.metadata?.lastSignInTime
    
      const loginInfo={email,lastSignInTime}
      fetch(`http://localhost:5000/users/${email}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(loginInfo)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        // navigate('/')
      })
    
    })
    .catch(data=>{
      console.log(data.message)
    })
  }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <h1 className="text-center py-3">Don't have an acount? <Link className="text-red-500" to={'/signUp'}>SignUp</Link></h1>
    </div>
  </div>
</div>
    );
};

export default SignIn;