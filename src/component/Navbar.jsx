import { Link } from "react-router";


const Navbar = () => {
    const link = <>
        <Link to={'/users'}> <button className="btn">User</button> </Link>
        <Link to={'/signIn'}> <button className="btn"> SignIn</button> </Link>
        <Link to={'/signUp'}> <button className="btn">SignUp</button> </Link>

    </>
    return (

        <div className="bg-NavbarImg h-[120px] bg-center flex justify-between px-2 items-center bg-cover">
            <div></div>
            <div className="flex justify-center items-center ">
                <img src={'https://i.ibb.co.com/546SKkH/logo1.png'} alt="" className="sm:w-24 w-14" />
                <h1 className="lg:text-6xl md:text-4xl text-xl font-bold text-white">Espresso Emporium</h1>
                <label className="input input-bordered ml-2 bg-white flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <div className="*:text-white flex gap-2">
                {link}
            </div>
        </div>

    );
};

export default Navbar;