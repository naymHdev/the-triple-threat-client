import { useEffect, useState } from "react";
import { FiLoader, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const imgbbAPIKey = "0255ad5b245a2826656139804e12da6d";

const CrimeDetails = () => {
  const { id } = useParams();
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const [crimeData, setCrimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [file, setFile] = useState(null);
  const [uploadedMedia, setUploadedMedia] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchCrimeDetails = async () => {
      try {
        const response = await fetch("/crime.json");
        if (!response.ok) {
          throw new Error("Failed to fetch crime details");
        }
        const data = await response.json();

        const crime = data.find((item) => item?.id === id);
        if (crime) {
          setCrimeData(crime);
          setUpvotes(crime.initialUpvotes || 0);
          setDownvotes(crime.initialDownvotes || 0);
        }
      } catch (error) {
        console.error("Error fetching crime details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCrimeDetails();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!comment) {
      alert("Please write a comment.");
      return;
    }

    setIsSubmitting(true); // Start loading spinner
    let mediaURL = "";

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();

        if (data.success) {
          mediaURL = data.data.url;
          setUploadedMedia(mediaURL);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }

    console.log("Comment Submitted:", comment, mediaURL);
    setComment("");
    setFile(null);
    setIsSubmitting(false); // Stop loading spinner
  };

  if (loading) {
    return <p className="flex justify-center h-screen items-center"><FiLoader className="text-[2.8rem] animate-spin text-[#3B9DF8]" /></p>;
  }

  if (!crimeData) {
    return <p className="text-center text-red-500">Crime details not found.</p>;
  }

  const { title, description, location, postTime, crimeTime, image, video } = crimeData;

  return (
    <div className="p-6 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold drop-shadow-md">{title}</h1>
      <div>
        <span className="text-gray-800 dark:text-white">Post Verification Score: 100</span>
      </div>
      {image && <img src={image} alt={title} className="rounded-xl w-full object-cover mb-4" />}
      {video && <video src={video} controls className="rounded-xl w-full h-96 mb-4" />}
      <p className="text-lg mb-2 drop-shadow-md">{description}</p>
      <p className="text-sm text-gray-500 drop-shadow-md">📍 Location: {location}</p>
      <p className="text-sm text-gray-500 drop-shadow-md">🕒 Reported On: {new Date(postTime).toLocaleString()}</p>
      <p className="text-sm text-gray-500 drop-shadow-md">🗓️ Crime Occurred On: {new Date(crimeTime).toLocaleString()}</p>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={() => setDownvotes((prev) => prev + 1)}
            className="flex items-center space-x-1 text-red-600 hover:text-red-700 cursor-pointer"
          >
            <FiThumbsDown />
            <span>{downvotes}</span>
          </button>
          <button
            onClick={() => setUpvotes((prev) => prev + 1)}
            className="flex items-center space-x-1 text-green-600 hover:text-green-700 cursor-pointer"
          >
            <FiThumbsUp />
            <span>{upvotes}</span>
          </button>
        </div>
      </div>

      <hr className="my-2" />

      <form onSubmit={handleCommentSubmit}>
        <div className="w-full md:w-[80%]">
          <label htmlFor="description" className="text-blue-600 hover:underline cursor-pointer">
            Add Comment + Proof
          </label>
          <textarea
            id="name"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write something about Crimes"
            className="border-border border outline-none px-4 w-full mt-1 min-h-[100px] bg-gray-200 rounded-md py-3 focus:border-gray-400 transition-colors duration-300"
          />
        </div>

        <div className="mt-4">
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="file-input file-input-bordered w-full md:max-w-xs"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full md:w-[20%] px-4 py-2 text-white rounded-md cursor-pointer mt-4 ${
            isSubmitting ? "bg-gray-500" : "bg-[#9333ea] hover:bg-[#9233eaec]"
          }`}
        >
          {isSubmitting ? (
            <FiLoader className="animate-spin text-xl mx-auto" />
          ) : (
            "Submit"
          )}
        </button>
      </form>

      {uploadedMedia && (
        <div className="mt-4">
          <p>Uploaded Media:</p>
          {uploadedMedia.endsWith(".mp4") ? (
            <video src={uploadedMedia} controls className="w-full h-64 mt-2" />
          ) : (
            <img src={uploadedMedia} alt="Uploaded Media" className="w-96 h-96 rounded-md mt-2" />
          )}
        </div>
      )}

      <hr className="my-10" />
      <div>
        <p className="my-2">All Comments:</p>
        <div className="bg-white shadow px-4 py-2 drop-shadow-md rounded-md max-w-5xl">
          <div className="flex justify-start items-start gap-2">
            <p className="text-2xl">
              <FaRegUserCircle />
            </p>
            <p className="font-semibold">Ripon Khan</p>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default CrimeDetails;
