import PropTypes from 'prop-types';

const ComingSoon = ({ page }) => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-secondary-bg rounded-xl">
      <h4 className="text-2xl lg:text-4xl font-semibold">{page} Coming Soon....</h4>
    </div>
  );
};

ComingSoon.propTypes = {
  page: PropTypes.string.isRequired,
};
export default ComingSoon;
