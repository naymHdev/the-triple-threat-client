import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const CrimeReportForm = () => {
    const [divisions, setDivisions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [loadingDivisions, setLoadingDivisions] = useState(true);
    const [loadingDistricts, setLoadingDistricts] = useState(true);
    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [description, setDescription] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [crimeTime, setCrimeTime] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [userVerified, setUserVerified] = useState(true); // Assume OTP verification is handled
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    
    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=0255ad5b245a2826656139804e12da6d`, // Replace YOUR_API_KEY with your ImgBB API key
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setImageUrl(response.data.data.url); // Get the URL of the uploaded image
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleVideoUpload = async (file) => {
    const formData = new FormData();
    formData.append("video", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=YOUR_API_KEY`, // Replace YOUR_API_KEY with your ImgBB API key
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setVideoUrl(response.data.data.url); // Get the URL of the uploaded video
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };
   // Fetch divisions when the component mounts
   useEffect(() => {
    axios
      .get('https://bdapis.com/api/v1.2/divisions')
      .then((response) => {
        setDivisions(response.data);
        setLoadingDivisions(false);
      })
      .catch((error) => {
        console.error('Error fetching divisions:', error);
        setLoadingDivisions(false);
      });
  }, []);

  // Fetch districts based on selected division
  useEffect(() => {
    if (selectedDivision) {
      setLoadingDistricts(true);
      axios
        .get(`https://bdapis.com/api/v1.2/districts?division=${selectedDivision}`)
        .then((response) => {
          setDistricts(response.data);
          setLoadingDistricts(false);
        })
        .catch((error) => {
          console.error('Error fetching districts:', error);
          setLoadingDistricts(false);
        });
    }
  }, [selectedDivision]);


  const onSubmit = (data) => {
    const finalData = {
      title: data.title,
      description: description,
      division: division,
      district: district,
      crimeTime: crimeTime,
      imageUrl: imageUrl,
      videoUrl: videoUrl,
      postTime: new Date().toISOString(),
      selectedDivision,
      selectedDistrict,
    };
    console.log("Final Submitted Data:", finalData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-6 drop-shadow-md">Crime Reporting Form</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            className="input input-bordered w-full"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        {/* Crime Description */}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Describe the crime"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        {/* Division and District */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Division</label>
            {/* Division Select */}
        <select
          className="select select-bordered w-full "
          onChange={(e) => setSelectedDivision(e.target.value)}
          value={selectedDivision}
          required
        >
          <option value="" disabled>
            Select Division
          </option>
          {loadingDivisions ? (
            <option>Loading divisions...</option>
          ) : (
            divisions?.data?.map((division) => (
              <option key={division.id} value={division.id}>
                {division.division}
              </option>
            ))
          )}
        </select>
            {errors.division && <p className="text-red-500 text-sm">{errors.division.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">District</label>
            <select
          className="select select-bordered w-full  md:ml-10 lg:ml-0"
          onChange={(e) => setSelectedDistrict(e.target.value)}
          value={selectedDistrict}
          required
        >
          <option value="" disabled>
            Select District
          </option>
          {loadingDistricts ? (
            <option>Loading districts...</option>
          ) : (
            districts?.data?.map((item) => (
              <option key={item.district} value={item.district}>
                {item.district}
              </option>
            ))
          )}
        </select>
            {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
          </div>
        </div>

        {/* Crime Time */}
        <div>
          <label className="block text-sm font-medium">Crime Time</label>
          <input
            type="datetime-local"
            {...register("crimeTime", { required: "Please select the time of the crime" })}
            onChange={(e) => setCrimeTime(e.target.value)}
            className="input input-bordered w-full"
          />
          {errors.crimeTime && <p className="text-red-500 text-sm">{errors.crimeTime.message}</p>}
        </div>

        {/* Crime Scene Images and Video */}
        <div>
          <label className="block text-sm font-medium">Crime Scene Image(s)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files[0])}
            className="file-input file-input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Optional Crime Scene Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => handleVideoUpload(e.target.files[0])}
            className="file-input file-input-bordered w-full"
          />
        </div>

        {/* Only AI Generated Description for Images */}
        {!video && (
          <div>
            <label className="block text-sm font-medium">AI-Generated Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea textarea-bordered w-full"
              placeholder="AI description of the crime scene"
            />
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button type="submit" className="px-2 py-2 bg-purple-500  rounded-md text-white cursor-pointer w-full" disabled={!userVerified}>
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrimeReportForm;
