import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Mainlayout = () => {
  return (
    <main>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </main>
  );
};

export default Mainlayout;
