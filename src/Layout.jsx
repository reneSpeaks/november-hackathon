import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
