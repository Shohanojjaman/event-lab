import HeroSection from '../Components/utilities/HeroSection';
import LatestBlogs from '../Components/utilities/LatestBlogs';
import PopularEvents from '../Components/utilities/PopularEvents';

const Home = () => {
  return (
    <div>
      {/* Hero / Banner Section */}
      <HeroSection />
      {/* Popular Event */}
      <PopularEvents />
      {/* Latest Blogs */}
      <LatestBlogs/>
    </div>
  );
};

export default Home;
