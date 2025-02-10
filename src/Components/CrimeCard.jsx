/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CrimeCard = ({
    id,
  title,
  description,
  location,
  postTime,
  crimeTime,
  image,
  video,
  initialUpvotes = 0,
  initialDownvotes = 0,
}) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/crime-details/${id}`);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
      };
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);

  return (
    <div  className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg max-w-md w-full transform hover:scale-105 transition duration-300">
      {/* Media Section */}
      {image ? (
        <img
        onClick={handleCardClick}
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-xl"
        />
      ) : (
        video && (
          <video onClick={handleCardClick} controls className="w-full h-56 rounded-xl">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      )}

      {/* Crime Information */}
      <div  className="mt-4">
        <h2 onClick={handleCardClick}  className="text-xl font-bold text-gray-800 dark:text-white hover:underline cursor-pointer">
          {title}
        </h2>
        <p onClick={handleCardClick} className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {description}
        </p>

        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <p>📍 {location}</p>
          <p>🕒 Crime Time: {new Date(crimeTime).toLocaleString()}</p>
          <p>🗓️ Post Time: {new Date(postTime).toLocaleString()}</p>
        </div>
      </div>

      {/* Community Interaction */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={() => setUpvotes(upvotes + 1)}
            className="flex items-center space-x-1 text-green-600 hover:text-green-700 cursor-pointer"
          >
            <FiThumbsUp />
            <span>{upvotes}</span>
          </button>
          <button
            onClick={() => setDownvotes(downvotes + 1)}
            className="flex items-center space-x-1 text-red-600 hover:text-red-700 cursor-pointer"
          >
            <FiThumbsDown />
            <span>{downvotes}</span>
          </button>
        </div>
        <button className="text-blue-600 hover:underline cursor-pointer">
          Add Comment + Proof
        </button>
      </div>
    </div>
  );
};

export default CrimeCard;
