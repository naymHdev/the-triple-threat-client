

const CallToAction = () => {
  return (
    <section className="bg-gray-200 py-5 px-4 sm:px-6 lg:px-8 text-center rounded-md max-w-3xl mx-auto">
      <div className=" mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 drop-shadow-md font-inter ">
          Be a Community Guardian
        </h2>
        <p className="text-lg  drop-shadow-md font-inter mb-2 ">
          Join CrimeRadar and help create a safer community for everyone.
        </p>
        <button className=" bg-[#b26cf3] hover:bg-[#734f94] rounded-md cursor-pointer text-white font-inter px-8 py-3 transition duration-300">
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default CallToAction;