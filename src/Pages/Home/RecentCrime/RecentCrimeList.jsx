
import CrimeCard from "../../../Components/CrimeCard";

const RecentCrimeList = () => {
  const posts = [
    {
      title: "Theft at Gulshan Market",
      description: "A suspicious individual was seen breaking into a car.",
      location: "Gulshan, Dhaka",
      postTime: "2025-02-10T12:00:00Z",
      crimeTime: "2025-02-10T10:00:00Z",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5o1EA4vY3UMgklSoYgpRcEX8G2vxuObkiQ&s",
      initialUpvotes: 15,
      initialDownvotes: 2,
    },
    {
      title: "Robbery at Mirpur",
      description: "Masked robbers entered a jewelry store at noon.",
      location: "Mirpur, Dhaka",
      postTime: "2025-02-09T15:30:00Z",
      crimeTime: "2025-02-09T12:00:00Z",
      video: "/path-to-video.mp4",
      initialUpvotes: 25,
      initialDownvotes: 3,
    },
    {
      title: "Robbery at Mirpur",
      description: "Masked robbers entered a jewelry store at noon.",
      location: "Mirpur, Dhaka",
      postTime: "2025-02-09T15:30:00Z",
      crimeTime: "2025-02-09T12:00:00Z",
      image: "https://e3.365dm.com/22/05/768x432/skynews-stop-and-search-police_5769872.jpg?20220512204527",
      initialUpvotes: 25,
      initialDownvotes: 3,
    },
   
  ];

  return (
  <section>
 <h1 className="text-3xl font-bold text-black dark:text-white mb-4 text-center my-10 drop-shadow-md">
  Recent Crimes
  {/* <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-md"></span> */}
</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  
  {posts.map((post, index) => (
    <CrimeCard key={index} {...post} />
  ))}
</div>
  </section>
  );
};

export default RecentCrimeList;
