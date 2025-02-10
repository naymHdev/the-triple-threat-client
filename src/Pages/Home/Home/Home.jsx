import Banner from "../Banner/Banner";
import RecentCrimeList from "../RecentCrime/RecentCrimeList";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
       <Banner/>
       <RecentCrimeList/>
        </div>
    );
};

export default Home;