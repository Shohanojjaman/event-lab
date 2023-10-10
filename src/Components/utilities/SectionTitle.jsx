import PropTypes from 'prop-types';

const SectionTitle = ({ subTitle, mainTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center pb-9">
      <p className="text-2xl text-theme font-semibold">{subTitle}</p>
      <h3 className="text-5xl uppercase text-heading leading-tight font-extrabold">{mainTitle}</h3>
    </div>
  );
};

SectionTitle.propTypes = {
  subTitle: PropTypes.string.isRequired,
  mainTitle: PropTypes.string.isRequired,
};

export default SectionTitle;
