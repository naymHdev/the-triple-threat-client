import { CiEdit } from "react-icons/ci";

const UserProfile = () => {
  return (
    <>
      <section className="w-[90%] md:w-[80%] mx-auto">
        <div className=" mt-6 border rounded-2xl border-neutral-200 p-4 flex items-center justify-between">
          <div className=" flex items-center gap-6">
            <div>
              <img
                className=" w-24 h-24 rounded-full"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt=""
              />
            </div>
            <div className=" space-y-  font-medium text-sm">
              <h2 className="text-3xl  text-primary-text">Naym Hossen</h2>
              <p className=" text-foreground">Role:</p>
              <p className=" text-foreground">country</p>
            </div>
          </div>
          <div>
            <button className="group hover:cursor-pointer hover:bg-[#37225B] hover:text-white hover:border-none border border-neutral-300 px-4 py-2 flex gap-3 items-center justify-center font-medium text-primary-text rounded-full">
              Edit <CiEdit className=" group-hover:text-white text-lg" />
            </button>
          </div>
        </div>
        {/* Personal Information */}
        <section className="mt-8 border rounded-2xl border-neutral-200 p-4">
          <div className=" flex items-center justify-between">
            <h2 className=" text-lg font-semibold text-primary-text">
              Personal Information
            </h2>
            <button className="group hover:cursor-pointer hover:bg-[#37225B] hover:text-white hover:border-none border border-neutral-300 px-4 py-2 flex gap-3 items-center justify-center font-medium text-primary-text rounded-full">
              Edit <CiEdit className=" group-hover:text-white text-lg" />
            </button>
          </div>
          <div className=" mt-6 grid grid-cols-1 md:grid-cols-2">
            <div className=" space-y-6">
              <div>
                <label className=" font-medium text-foreground text-sm">
                  First Name
                </label>
                <h4 className=" text-md font-medium text-primary-text mt-1">
                  {name?.charAt(0).toUpperCase() + name?.slice(1)}
                </h4>
              </div>
              <div>
                <label className=" font-medium text-foreground text-sm">
                  Email address
                </label>
                <h4 className=" text-md font-medium text-primary-text mt-1">
                  naym@gmail.com
                </h4>
              </div>
            </div>
            <div className=" space-y-6">
              <div>
                <label className=" font-medium text-foreground text-sm">
                  Last Name
                </label>
                <h4 className=" text-md font-medium text-primary-text mt-1">
                  NA
                </h4>
              </div>
              <div>
                <label className=" font-medium text-foreground text-sm">
                  Phone number
                </label>
                <h4 className=" text-md font-medium text-primary-text mt-1">
                  01770064053
                </h4>
              </div>
            </div>
          </div>
        </section>

        {/* My crime reportes */}
        <section className="mt-8 border rounded-2xl border-neutral-200 p-4">
          <div className=" flex items-center justify-between">
            <h2 className=" text-lg font-semibold text-primary-text">
              My Reports
            </h2>
          </div>
        </section>
      </section>
    </>
  );
};

export default UserProfile;
