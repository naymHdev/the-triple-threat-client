import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiEdit } from "react-icons/ci";

const UserImageModal = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const onSubmit = (data) => console.log(data);

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={() => document.getElementById("my_modal_5").showModal()}
        className="group hover:cursor-pointer hover:bg-[#37225B] hover:text-white hover:border-none border border-neutral-300 px-4 py-2 flex gap-3 items-center justify-center font-medium  rounded-full"
      >
        Edit <CiEdit className=" group-hover:text-white text-lg" />
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update your profile</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 space-y-6 flex flex-col items-center justify-center w-full"
          >
            <div className="w-full">
              <input
                type="file"
                accept="image/*" // Restrict to image files
                className="w-full px-4 py-2 rounded-xl border-neutral-300 focus:outline-none"
                {...register("image", { required: "Image is required" })}
                onChange={handleFileChange} // Handle file selection
              />
              {errors.image && (
                <span className="text-red-500">{errors.image.message}</span>
              )}
            </div>

            {/* Image Preview Section */}
            {previewImage && (
              <div className="mt-2 w-44 h-44  rounded-full">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-44 h-44  rounded-full border-2 border-[#37225B] shadow shadow-[#37225B]"
                />
              </div>
            )}

            <div className="w-full">
              <input
                className="w-full px-4 py-2 rounded-xl border-neutral-300 focus:outline-none"
                placeholder="Update your bio"
                {...register("name")}
              />
              {errors.nameRequired && (
                <span className=" text-red-500">This field is required</span>
              )}
            </div>

            <div className="w-full">
              <input
                className="w-full px-4 py-2 rounded-xl border-neutral-300 focus:outline-none"
                placeholder="Update your address"
                {...register("address")}
              />
              {errors.phoneNumberRequired && (
                <span className=" text-red-500">This field is required</span>
              )}
            </div>

            <div className=" flex items-center gap-4 justify-center">
              <div className="">
                <form method="dialog">
                  <button className="btn bg-red-500 text-white">Cancel</button>
                </form>
              </div>
              <button type="submit" className="btn">
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UserImageModal;
