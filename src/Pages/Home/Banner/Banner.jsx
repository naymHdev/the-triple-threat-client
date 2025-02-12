import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="flex justify-around items-center lg:flex-row flex-col-reverse">
            <div className="max-w-xl px-2 lg:px-0 ">
                <h1 className="text-4xl font-semibold drop-shadow-md">Crime Reporting and Community Verification Platform. </h1>
                <p className="text-gray-600 mt-5 drop-shadow-md">Empowering Communities for a Safer Tomorrow”
                “Join CrimeRadar — Report, Verify, and Stay Informed</p>
               <div className="flex justify-start items-center gap-5 my-5 drop-shadow-md">
               <Link to={'/report-crime'} className='px-3 py-2 bg-[#9333ea] drop-shadow-md  font-inter text-white   rounded cursor-pointer'>Report a Crime Now</Link>
               <Link to="/all-reports" className='px-3 py-2 bg-[#9333ea] drop-shadow-md font-inter text-white   rounded cursor-pointer'>Explore Crime Feed</Link>
               </div>
            </div>
            <img className="md:w-[500px] w-[400px]" src="https://cdni.iconscout.com/illustration/premium/thumb/online-criminal-record-illustration-download-in-svg-png-gif-file-formats--doc-crime-document-archive-law-and-justice-pack-security-illustrations-4697595.png?f=webp" alt="" />
        </div>
    );
};

export default Banner;