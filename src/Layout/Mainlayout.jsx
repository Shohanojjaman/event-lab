import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  );
};

export default Mainlayout;
