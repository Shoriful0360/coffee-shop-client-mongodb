

const Banner = () => {
    return (
    <div>
        
            <div className="bg-bannerImg  flex justify-center items-center   h-[400px] px-5 md:h-[500px] lg:h-[600px]  bg-center bg-no-repeat   bg-cover">
           
              <div className="flex-1"></div>
        <div className="sm:flex-1 lg:px-14 md:px-10 px-2">
        <h1 className="text-4xl font-semibold text-white">Would you like a Cup of Delicious Coffee?</h1> 
           <p className="text-white">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
           <button className="btn bg-[#E3B577]">Learn More</button>
        </div>
      
        </div>
    </div>
    );
};

export default Banner;