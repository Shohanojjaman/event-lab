import moment from 'moment';
import PropTypes from 'prop-types';
import { BsCalendarWeek } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BlogsCard = ({ blog, index }) => {
  const { title, bg_image, tags, publish_date } = blog || {};
  console.log(index, blog);
  return (
    <div
      className="bg-secondary-bg rounded-lg group"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="500">
      <div className="relative rounded-lg overflow-hidden">
        <img src={bg_image} className="w-full h-52" alt="" />
        <span className="font-semibold text-lg text-white bg-theme rounded-md py-2 px-8 transition-all duration-300 absolute left-2 bottom-2 group-hover:bg-heading">
          {tags?.[0]}
        </span>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <BsCalendarWeek className="text-theme text-sm"></BsCalendarWeek>
            <p className="text-sm text-heading font-semibold">{moment(publish_date).format('MMMM DD, YYYY')}</p>
          </div>
        </div>
        <h4 className="text-xl font-semibold text-heading capitalize">{title}</h4>
        <div className="flex justify-between">
          <Link className="text-theme font-bold hover:underline transition-all duration-300">Details</Link>
        </div>
      </div>
    </div>
  );
};

BlogsCard.propTypes = {
  blog: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default BlogsCard;
