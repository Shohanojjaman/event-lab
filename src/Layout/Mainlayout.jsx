import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Mainlayout = () => {
  return (
    <main>
        <Header></Header>
      <Outlet></Outlet>
    </main>
  );
};

export default Mainlayout;
