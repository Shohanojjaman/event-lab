import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Mainlayout = () => {
  return (
    <main className="overflow-hidden">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </main>
  );
};

export default Mainlayout;
