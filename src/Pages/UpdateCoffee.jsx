import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const loadedCoffee=useLoaderData()

    const { name,_id, chef, photo,supplier,taste, category,details,price} = loadedCoffee;
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photoUrl.value;
        const price = form.price.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo,price }
console.log(newCoffee)
        fetch(`http://localhost:5000/coffees/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        // Swal.fire({
        //     title: 'success!',
        //     text: 'update you coffee',
        //     icon: 'success',
        //     confirmButtonText: 'ok'
        //   })
      
    }
    return (
        <div className='bg-[#F4F3F0] p-10'>
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card w-full shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className='md:flex   gap-4'>
                                <div className=" w-1/2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' defaultValue={name} placeholder="Enter your coffe name" className="input input-bordered w-full " required />
                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text">chef</span>
                                    </label>
                                    <input type="text" name='chef' defaultValue={chef} placeholder="Enter your coffee cheif" className="input w-full input-bordered" required />

                                </div>
                            </div>
                            <div className='md:flex   gap-4'>
                                <div className=" w-1/2">
                                    <label className="label">
                                        <span className="label-text">Supplier</span>
                                    </label>
                                    <input type="text" name='supplier' defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full " required />
                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text">Taste</span>
                                    </label>
                                    <input type="text" name='taste' defaultValue={taste} placeholder="Enter coffee taste" className="input w-full input-bordered" required />

                                </div>
                            </div>
                            <div className='md:flex   gap-4'>
                                <div className=" w-1/2">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" name='category' defaultValue={category} placeholder="Enter coffee category" className="input input-bordered w-full " required />
                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" name='details' defaultValue={details} placeholder="Enter coffee-details" className="input w-full input-bordered" required />

                                </div>
                            </div>
                           <div className='md:flex gap-4'>
                           <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text">photo</span>
                                </label>
                                <input type="text" name='photoUrl' defaultValue={photo} placeholder="Enter photo URL" className="input w-full input-bordered" required />

                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                <input type="text" name='price' defaultValue={price} placeholder="Enter Price" className="input w-full input-bordered" required />

                            </div>
                           </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#D2B48C]">update coffee</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;