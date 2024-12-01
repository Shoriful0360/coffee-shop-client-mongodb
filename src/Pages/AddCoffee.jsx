import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'


const AddCoffee = () => {
    const navigate=useNavigate()
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
        // sent data server
        fetch('http://localhost:5000/coffees',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId)
                Swal.fire({
                    title: 'success!',
                    text: 'Added your coffee item',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
                  newCoffee.reset
        })
       
    }

const handleBack=()=>{
navigate(-1)
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
                                    <input type="text" name='name' placeholder="Enter your coffe name" className="input input-bordered w-full " required />
                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text">chef</span>
                                    </label>
                                    <input type="text" name='chef' placeholder="Enter your coffee cheif" className="input w-full input-bordered" required />

                                </div>
                            </div>
                            <div className='md:flex   gap-4'>
                                <div className=" w-1/2">
                                    <label className="label">
                                        <span className="label-text">Supplier</span>
                                    </label>
                                    <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full " required />
                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text">Taste</span>
                                    </label>
                                    <input type="text" name='taste' placeholder="Enter coffee taste" className="input w-full input-bordered" required />

                                </div>
                            </div>
                            <div className='md:flex   gap-4'>
                                <div className=" w-1/2">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered w-full " required />
                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" name='details' placeholder="Enter coffee-details" className="input w-full input-bordered" required />

                                </div>
                            </div>
                           <div className='md:flex gap-4'>
                           <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text">photo</span>
                                </label>
                                {/* <input type="text" name='photoUrl' placeholder="Enter photo URL" className="input w-full input-bordered" required /> */}
                                <input type="file" name='photoUrl'  placeholder="Enter photo URL" className="file-input w-full max-w-xs" />

                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                <input type="text" name='price' placeholder="Enter Price" className="input w-full input-bordered" required />

                            </div>
                           </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#D2B48C]">Add coffee</button>
                            </div>
                        </form>
                     <div className='flex justify-center'>
                     <button onClick={handleBack} className='btn bg-secondary '>Back</button>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;