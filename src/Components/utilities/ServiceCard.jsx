import PropTypes from 'prop-types';

const ServiceCard = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-white h-64 border-[0.5px] hover:border-theme flex flex-col justify-center items-center cursor-pointer group hover:bg-theme transition-all duration-500">
      <div className="text-[54px] text-theme group-hover:text-white mb-6">{icon}</div>
      <h4 className="text-heading group-hover:text-white font-bold text-lg capitalize">{title}</h4>
      <p className="text-sm capitalize group-hover:text-white">{subtitle}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ServiceCard;
