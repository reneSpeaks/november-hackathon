import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UserContext.jsx';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AddActivityModal from './components/AddActivityModal.jsx';

const Layout = () => {
  return (
    <UserProvider>
      <Header />
      <div className="relative">
        <main className="flex flex-col relative z-10 items-center mb-24 bg-base-100 border-b-2 border-primary border-solid">
          <ToastContainer position="bottom-left" autoClose={2000} />
          <AddActivityModal />
          <Outlet />
        </main>
        <Footer />
      </div>
    </UserProvider>
  );
};

export default Layout;
