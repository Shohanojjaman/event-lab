import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(null);
const DataContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [blogs, setBlogs] = useState([]);

  // Event data loader
  useEffect(() => {
    fetch('/data/events.json')
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);

  // Blog data loader
  useEffect(() => {
    fetch('/data/blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  const dataInfo = { events, blogs };
  return <DataContext.Provider value={dataInfo}>{children}</DataContext.Provider>;
};

DataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContextProvider;
