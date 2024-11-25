import { useRef, useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import logo from '/DocMorris_Logo_11.2020.svg';

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const checkBoxRef = useRef(null);

  const toggleMenu = () => {
    setIsMobile(prevState => !prevState);
    checkBoxRef.current.checked = !checkBoxRef.current.checked;
  };

  return (
    <nav className="max-w-7xl w-full h-full flex flex-row gap-4 overflow-hidden text-primary">
      <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center">
        <img src={logo} alt="Doc Morris Logo" className="max-w-48 w-full my-2 ml-2 drop-shadow-[0_1px_0px_black]" />
        <ul className={`flex flex-col gap-2 lg:flex lg:flex-row lg:gap-10 lg:h-fit transition-h duration-500 ease-in-out text-xl px-4 mr-4 font-medium font-outline ${isMobile ? "h-48" : "h-0"}`}>
          <li>HOME</li>
          <li>SERVICES</li>
          <li>TEAM</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>

      <button className="flex flex-row lg:hidden items-center justify-center self-start mt-5 mr-8 gap-2 text-xl font-medium cursor-pointer font-outline" onClick={toggleMenu}>
        <div className="swap swap-rotate drop-shadow-[0_1px_0px_black]">
          <input ref={checkBoxRef} type="checkbox" />
          <FaBars className="swap-off fill-current" />
          <FaXmark className="swap-on fill-current" />
        </div>
      </button>
    </nav>
  );
};

export default Navigation;
