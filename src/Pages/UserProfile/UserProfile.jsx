import MyReports from "./MyReports";
import UserDetailsModal from "./UserDetailsModal";
import UserImageModal from "./UserImageModal";

const UserProfile = () => {
  return (
    <>
      <section className="w-[90%] md:w-[70%] mx-auto">
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
              <h2 className="text-3xl  ">Naym Hossen</h2>
              <p className=" text-green-600">Verified</p>
              <p className=" ">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div>
            <UserImageModal />
          </div>
        </div>
        {/* Personal Information */}
        <section className="mt-8 border rounded-2xl border-neutral-200 p-4">
          <div className=" flex items-center justify-between">
            <h2 className=" text-lg font-semibold ">Personal Information</h2>
            <UserDetailsModal />
          </div>
          <div className=" mt-6 grid grid-cols-1 md:grid-cols-2">
            <div className=" space-y-6">
              <div>
                <label className=" font-medium  text-sm">First Name</label>
                <h4 className=" text-md font-medium  mt-1">
                  {name?.charAt(0).toUpperCase() + name?.slice(1)}
                </h4>
              </div>
              <div>
                <label className=" font-medium  text-sm">Email address</label>
                <h4 className=" text-md font-medium  mt-1">naym@gmail.com</h4>
              </div>
            </div>
            <div className=" space-y-6">
              <div>
                <label className=" font-medium  text-sm">Last Name</label>
                <h4 className=" text-md font-medium  mt-1">NA</h4>
              </div>
              <div>
                <label className=" font-medium  text-sm">Phone number</label>
                <h4 className=" text-md font-medium  mt-1">01770064053</h4>
              </div>
            </div>
          </div>
        </section>

        {/* My crime reportes */}
        <section className="mt-8 border rounded-2xl border-neutral-200 p-4">
          <div className=" flex items-center justify-between">
            <h2 className=" text-lg font-semibold ">My Crime Reports</h2>
          </div>
          <div>
            <MyReports />
          </div>
        </section>
      </section>
    </>
  );
};

export default UserProfile;
