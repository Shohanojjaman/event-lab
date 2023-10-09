import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  const logo = 'https://i.ibb.co/rmDp12y/logo-v2.png';
  return (
    <footer className="bg-heading py-20" data-aos="fade-up">
      <div className="container mx-auto flex">
        <div className="w-1/4 space-y-3 text-center" data-aos="fade-right">
          <h4 className="text-white text-2xl font-semibold">Quick Link</h4>
          <ul className="steps steps-vertical">
            <li className="step !min-h-[2.5rem]">
              <Link to={'/about'}>About</Link>
            </li>
            <li className="step !min-h-[2.5rem]">
              <Link to={'/events'}>Events</Link>
            </li>
            <li className="step !min-h-[2.5rem]">
              <Link to={'/blogs'}>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/2 flex flex-col  items-center text-center gap-6 text-[#ffffff66]" data-aos="fade-up">
          <Link to={'/'}>
            <img src={logo} className="mx-auto" alt="Event Lav Logo" />
          </Link>
          <div className="flex text-2xl gap-6">
            <a href="#">
              <FaFacebookF className="cursor-pointer transition-colors du hover:text-theme"></FaFacebookF>
            </a>
            <a href="#">
              <FaInstagram className="cursor-pointer transition-colors du hover:text-theme"></FaInstagram>
            </a>
            <a href="#">
              <FaLinkedinIn className="cursor-pointer transition-colors du hover:text-theme"></FaLinkedinIn>
            </a>
            <a href="#">
              <FaTwitter className="cursor-pointer transition-colors du hover:text-theme"></FaTwitter>
            </a>
            <a href="#">
              <FaWhatsapp className="cursor-pointer transition-colors du hover:text-theme"></FaWhatsapp>
            </a>
          </div>
          <p>
            Copyright 2023 EventLab | Design By{' '}
            <a
              href="https://github.com/shohanojjaman"
              className="font-semibold hover:text-theme"
              target="_blank"
              rel="noopener noreferrer">
              Shohanojjaman
            </a>
          </p>
        </div>
        <div className="w-1/4 space-y-3 text-center" data-aos="fade-left">
          <h4 className="text-white text-2xl font-semibold">Contact</h4>
          <ul className="steps steps-vertical">
            <li className="step !min-h-[5rem]">
              <div className="flex items-center gap-3">
                <BiPhoneCall className="text-2xl"></BiPhoneCall>
                <div className="flex flex-col">
                  <a href="tel:+1 763-227-5032">+1 763-227-5032</a>
                  <a href="tel:+1 763-227-5033">+1 763-227-5033</a>
                </div>
              </div>
            </li>
            <li className="step !min-h-[5rem]">
              <div className="flex items-center gap-3">
                <AiOutlineMail className="text-2xl"></AiOutlineMail>
                <div className="flex flex-col text-left">
                  <a href="mailto:info@example.com">info@eventlab.com</a>
                  <a href="mailto:support@example.com">support@eventlab.com</a>
                </div>
              </div>
            </li>
            <li className="step !min-h-[5rem]">
              <div className="flex items-center gap-3">
                <BiPhoneCall className="text-2xl"></BiPhoneCall>
                <div className="flex flex-col text-left">
                  <a href="mailto:info@example.com">info@eventlab.com</a>
                  <a href="mailto:support@example.com">support@eventlab.com</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
