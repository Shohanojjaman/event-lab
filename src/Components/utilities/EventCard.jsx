import moment from 'moment';
import PropTypes from 'prop-types';
import { BsCalendarWeek, BsShare } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const EventCard = ({ event, index }) => {
  const { id, bg_image, date, location, seat, title } = event || {};
  console.log(index);

  return (
    <div className="bg-white group" data-aos="fade-up" data-aos-delay={index * 100} data-aos-duration="500">
      <div className="relative rounded-lg overflow-hidden">
        <img src={bg_image} className="w-full h-52" alt="" />
        <span className="font-semibold text-lg text-white bg-theme rounded-md py-2 px-8 transition-all duration-300 absolute left-0 bottom-0 group-hover:bg-heading">
          Total Seat {seat}
        </span>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <BsCalendarWeek className="text-theme text-sm"></BsCalendarWeek>
            <p className="text-sm text-heading font-semibold">{moment(date).format('MMMM DD, YYYY')}</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoLocationOutline className="text-theme text-sm"></IoLocationOutline>
            <p className="text-sm text-heading font-semibold">{location}</p>
          </div>
        </div>
        <h4 className="text-xl font-semibold text-heading capitalize">{title}</h4>
        <div className="flex justify-between">
          <Link to={`/events/${id}`} className="text-theme font-bold hover:underline transition-all duration-300">
            Details
          </Link>
          <div className="flex gap-4">
            <div className="hidden gap-4 group-hover:flex transition-all duration-300">
              <Link>
                <FaFacebookF className="text-[#abafb1] text-sm" />
              </Link>
              <Link>
                <FaInstagram className="text-[#abafb1] text-sm" />
              </Link>
              <Link>
                <FaLinkedinIn className="text-[#abafb1] text-sm" />
              </Link>
              <Link>
                <FaTwitter className="text-[#abafb1] text-sm" />
              </Link>
            </div>
            <BsShare className="text-base text-theme"></BsShare>
          </div>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default EventCard;
