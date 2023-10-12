import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BGTitle from './BGTitle';

const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="page-title-bg">
      <div className="container mx-auto min-h-[400px] flex flex-col items-center justify-center">
        <div className="self-start">
          <BGTitle title={title} />
        </div>
        <h1 className="font-extrabold text-theme text-5xl">{title}</h1>
        <div className="text-sm breadcrumbs text-theme font-semibold">
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link>{title}</Link>
            </li>
            {subTitle && (
              <li>
                <Link>{subTitle}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      ;
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default PageTitle;
