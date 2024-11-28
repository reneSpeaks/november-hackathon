import { useEffect, useState } from 'react';
import Navigation from './Navigation.jsx';
import { useUser } from '../contexts/UserContext.jsx';
import logo from '/DocMorris_Logo_APOTHEKE.svg';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const user = useUser();

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollY(window.scrollY));
    return () => window.removeEventListener('scroll', () => setScrollY(window.scrollY));
  });

  return (
    <>
      <header className={`${scrollY === 0 && 'lg:bg-transparent lg:border-none'} fixed w-screen flex items-center justify-center z-50 bg-white border-b-2 border-b-primary`}>
        {user ? (
          <Navigation logo={logo} />
        ) : (
          <img src={logo} alt="DocMorris Logo" className="max-w-48 w-full my-2 ml-2 drop-shadow-[0_1px_0px_black]" />
        )}
      </header>
    </>
  );
};

export default Header;