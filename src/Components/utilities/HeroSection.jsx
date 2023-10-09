import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-area py-28">
      <div className="container mx-auto flex max-lg:flex-col space-y-12 items-center h-full">
        <div className="lg:w-1/2 flex flex-col items-center h-full gap-6" data-aos="fade-right">
          <h1 className="text-5xl md:text-[65px] leading-tight max-lg:text-center font-extrabold">
            Seamless Corporate Event Solutions with <span className="text-theme">E</span>vent{' '}
            <span className="text-theme">L</span>ab
          </h1>
          <div className="flex lg:self-start gap-4 flex-wrap justify-center" data-aos="fade-up">
            <Link to={'/about'} className="primary-btn">
              About Us
            </Link>
            <Link to={'/login'} className="secondary-btn">
              Get Started
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left">
          <img src={'https://i.ibb.co/GPVpKhz/hero-figure.png'} alt="" className="" />
        </div>
      </div>
      ;
    </div>
  );
};

export default HeroSection;
