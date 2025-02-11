import Banner from "../Banner/Banner";
import RecentCrimeList from "../RecentCrime/RecentCrimeList";
import WhyChoseUs from "../WhyChoseUs/WhyChoseUs";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
       <Banner/>
       <RecentCrimeList/>
       <WhyChoseUs/>
        </div>
    );
};

export default Home;