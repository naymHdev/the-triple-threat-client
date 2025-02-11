import { useEffect, useState } from 'react';
import CrimeCard from '../../../Components/CrimeCard';
import axios from 'axios';

const ReportContent = () => {
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [page, setPage] = useState(1);
  const [loadingDivisions, setLoadingDivisions] = useState(true);
  const [loadingDistricts, setLoadingDistricts] = useState(true);

  const posts = [
    {
      id: 1,
      title: 'Theft at Gulshan Market',
      description: 'A suspicious individual was seen breaking into a car.',
      location: 'Gulshan, Dhaka',
      postTime: '2025-02-10T12:00:00Z',
      crimeTime: '2025-02-10T10:00:00Z',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5o1EA4vY3UMgklSoYgpRcEX8G2vxuObkiQ&s',
      initialUpvotes: 15,
      initialDownvotes: 2,
    },
    {
      id: 2,
      title: 'Robbery at Mirpur',
      description: 'Masked robbers entered a jewelry store at noon.',
      location: 'Mirpur, Dhaka',
      postTime: '2025-02-09T15:30:00Z',
      crimeTime: '2025-02-09T12:00:00Z',
      video: '/path-to-video.mp4',
      initialUpvotes: 25,
      initialDownvotes: 3,
    },
    {
      id: 2,
      title: 'Robbery at Mirpur',
      description: 'Masked robbers entered a jewelry store at noon.',
      location: 'Mirpur, Dhaka',
      postTime: '2025-02-09T15:30:00Z',
      crimeTime: '2025-02-09T12:00:00Z',
      video: '/path-to-video.mp4',
      initialUpvotes: 25,
      initialDownvotes: 3,
    },
    {
      id: 2,
      title: 'Robbery at Mirpur',
      description: 'Masked robbers entered a jewelry store at noon.',
      location: 'Bhola,Dhaka',
      postTime: '2025-02-09T15:30:00Z',
      crimeTime: '2025-02-09T12:00:00Z',
      video: '/path-to-video.mp4',
      initialUpvotes: 25,
      initialDownvotes: 3,
    },
    // More posts...
  ];

  const postsPerPage = 4; // Number of posts per page

  // Filter posts based on search, selected division, district, and sort criteria
  const filteredPosts = posts.filter((post) => {
    const searchMatch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.location.toLowerCase().includes(searchQuery.toLowerCase());

    const divisionMatch = selectedDivision
      ? post.location.toLowerCase().includes(selectedDivision.toLowerCase())
      : true;

    const districtMatch = selectedDistrict
      ? post.location.toLowerCase().includes(selectedDistrict.toLowerCase())
      : true;

    return searchMatch && divisionMatch && districtMatch;
  });

  // Sorting function
  const sortedPosts = filteredPosts.sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.postTime) - new Date(a.postTime); // Sort by post date
      case 'upvotes':
        return b.initialUpvotes - a.initialUpvotes; // Sort by upvotes
      case 'verificationScore':
        return b.verificationScore - a.verificationScore; // Sort by verification score (if available)
      default:
        return 0;
    }
  });

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1)); // Ensure the page doesn't go below 1
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-6 ">
      {/* Left Side Options */}
      <div className="col-span-1 space-y-4">
        <h2 className="text-xl font-semibold">Filter & Search</h2>

        {/* Division Select */}
        <select
          className="select select-bordered w-full max-w-xs"
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

        {/* District Select */}
        <select
          className="select select-bordered w-full max-w-xs md:ml-10 lg:ml-0"
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

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by keywords"
          className="input input-bordered w-full p-2"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {/* Sort Select */}
        <select
          name="sortBy"
          className="select select-bordered w-full p-2"
          onChange={handleSortChange}
        >
          <option value="date">Sort by Date</option>
          <option value="upvotes">Sort by Upvotes</option>
          <option value="verificationScore">Sort by Verification Score</option>
        </select>

        {/* Apply Filters Button */}
        <button className="bg-purple-500 rounded-md text-white cursor-pointer w-full p-2 mt-4">Apply Filters</button>
      </div>

      {/* Right Side Crime Feed */}
   
      <div className="col-span-3 md:grid grid-cols-2 gap-4">
  {currentPosts.length > 0 ? (
    currentPosts.map((post, index) => (
      <CrimeCard key={index} {...post} />
    ))
  ) : (
    <div className="col-span-2 text-center py-4 my-20">
      <p>No crimes found based on your search and filters. Please try again with different criteria.</p>
    </div>
  )}




</div>


<div>
    
  {/* Pagination Control */}
  {
    currentPosts.length > 0 && (
      <div className="flex justify-center my-5 lg:ml-[750px] ">
        <div className={`flex gap-4 `}>
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="btn btn-sm btn-outline p-2"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={indexOfLastPost >= posts.length}
            className="btn btn-sm btn-outline p-2"
          >
            Next
          </button>
        </div>
      </div>
    )
  }

</div>




    </div>
  );
};

export default ReportContent;
