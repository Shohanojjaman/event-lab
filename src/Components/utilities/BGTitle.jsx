import PropTypes from 'prop-types';

const BGTitle = ({ title }) => {
  return (
    <div>
      <h2
        style={{
          '-webkit-text-stroke': '1px #f8f1f3',
        }}
        className="text-8xl font-extrabold uppercase leading-none break-all bg-transparent text-fill-transparent">
        {title}
      </h2>
    </div>
  );
};

BGTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BGTitle;
