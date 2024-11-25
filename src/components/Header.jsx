import { useEffect, useState } from 'react';
import Navigation from './Navigation.jsx';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollY(window.scrollY));
    return () => window.removeEventListener('scroll', () => setScrollY(window.scrollY));
  });

  return (
    <header className={`${scrollY === 0 && 'lg:bg-transparent lg:border-none'} fixed w-screen flex items-center justify-center z-50 bg-white border-b-2 border-b-primary`}>
      <Navigation />
    </header>
  );
};

export default Header;