import { CiEdit } from "react-icons/ci";

const UserImageModal = () => {
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
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UserImageModal;
