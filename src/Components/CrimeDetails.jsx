import { useEffect, useState } from "react";
import { FiLoader, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { axiosPublic } from "../Hooks/usePublic";

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
  const [clicked, setClicked] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(0); // Track the upvote count
  const [downvoteCount, setDownvoteCount] = useState(0); // Track the upvote count


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

  const data = {
    id: id,
    content: comment,
    mediaURL: mediaURL,
 
  }

    console.log(data);

    axiosPublic.post('', data).then(response => console.log(response)).catch(error => console.log(error))

    setComment("");
    setFile(null);
    setIsSubmitting(false); // Stop loading spinner
  };



  
    const handleUpvote = () => {
      const newCount = clicked ? upvoteCount - 1 : upvoteCount + 1;
    setUpvoteCount(newCount); // Update the upvote count

    const data = { upvotes: newCount };

      if (!clicked) {
        axiosPublic.patch('your-api-endpoint', data)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        // Perform post action here
      } else {
      axiosPublic.patch('your-api-endpoint', data)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        // Perform delete action here
      }
      setClicked(!clicked); 
      // console.log(clicked)// Toggle the state for next click
    };

    const handleDownvote = () => {
      const newCount = clicked? downvoteCount - 1 : downvoteCount + 1;
      setDownvoteCount(newCount); // Update the downvote count
      const data = { upvotes: newCount };
      if (!clicked) {
        axiosPublic.patch('your-api-endpoint', data)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        // Perform post action here
      } else {
      axiosPublic.patch('your-api-endpoint', data)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        // Perform delete action here
      }
      setClicked(!clicked); 
    };
  
 



  if (loading) {
    return <p className="flex justify-center h-screen items-center"><FiLoader className="text-[2.8rem] animate-spin text-[#9333ea]" /></p>;
  }

  if (!crimeData) {
    return <p className="text-center text-red-500">Crime details not found.</p>;
  }

  const { title, description, division, district, postTime, crimeTime, image, video } = crimeData;
  // console.log(crimeData);

  return (
    <div className="p-6  min-h-screen text-gray-800  max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold drop-shadow-md">{title}</h1>
      <div>
        <span className="text-gray-800 ">Post Verification Score: 100</span>
      </div>
      {image && <img src={image} alt={title} className="rounded-xl w-full object-cover mb-4" />}
      {video && <video src={video} controls className="rounded-xl w-full h-96 mb-4" />}
      <p className="text-lg mb-2 drop-shadow-md">{description}</p>
      <p className="text-sm text-gray-500 drop-shadow-md">📍 Division:{division}</p>
      <p className="text-sm text-gray-500 drop-shadow-md">📍 District:{district}</p>
      <p className="text-sm text-gray-500 drop-shadow-md">🕒 Reported On: {new Date(postTime).toLocaleString()}</p>
      <p className="text-sm text-gray-500 drop-shadow-md">🗓️ Crime Occurred On: {new Date(crimeTime).toLocaleString()}</p>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={handleDownvote}
            className="flex items-center space-x-1 text-red-600 hover:text-red-700 cursor-pointer"
          >
            <FiThumbsDown />
            <span>{downvotes}</span>
          </button>
          <button 
            onClick={handleUpvote}
            className="flex items-center space-x-1 text-green-600 hover:text-green-700 cursor-pointer"
          >
            <FiThumbsUp />
            <span>{upvotes}</span>
          </button>
        </div>
      </div>

      <hr className="my-2" />
{/* Comment Form */}
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
{/* Image Upload */}
      {uploadedMedia && (
        <div className="mt-4">
          <p>Uploaded Media:</p>
          {uploadedMedia.endsWith(".mp4") ? (
            <video src={uploadedMedia} controls className="w-full h-64 mt-2" />
          ) : (
            <img src={uploadedMedia} alt="Uploaded Media" className="w-20 h- 20 rounded-md mt-2" />
          )}
        </div>
      )}
{/* Show Comments */}
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
