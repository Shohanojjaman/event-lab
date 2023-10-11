import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(null);
const DataContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('/data/events.json')
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(events);
  const dataInfo = { events };
  return <DataContext.Provider value={dataInfo}>{children}</DataContext.Provider>;
};

DataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContextProvider;
