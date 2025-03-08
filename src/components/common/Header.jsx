import { useState, useEffect } from "react";
import logo1 from "../../assets/logo.png";

import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const handleMenuClose = () => {
    setIsMenuOpen(false); // This will close the menu
  };

  return (
    <header className="fixed top-0  w-full bg-white xl:shadow-md z-50 justify-center  ">
      <div className="flex items-center justify-between px-0 sm:px-0 md:px-12    h-18 sm:h-20 lg:h-30 ">
        {/* Logo */}<Link to="/">
       <div className="  rounded-full flex justify-center items-center p-2">
        <img
          src={logo1} // Replace with the correct image path
          alt="ITFFC Logo"
          className="w-[46px] h-[46px] sm:h-[36px] sm:w-[36px] md:h-[80px] md:w-[80px] lg:h-[83px] lg:w-[83px] object-contain p-1 md:p-2"
        />
      </div>
      </Link>
        {/* Menu Button for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#0B1956] mr-6 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } fixed inset-x-0 sm:static top-[60px] sm:top-auto left-0 w-full sm:w-auto bg-white  sm:flex items-center flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 px-4 sm:px-0 py-6 sm:py-0 font-quicksand font-semibold transition-all h-screen sm:h-fit `}
        >
          <ul className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-6 text-[13px] sm:text-[13px] md:text-[13px] lg:text-[16px] text-black ">
          <li
              className={`block transition-all font-semibold ${
                isActive("/") ? "text-blue-500" : "hover:text-orange-500"
              }`}
            >
              <Link to="/" onClick={handleMenuClose}>Home</Link>
            </li>
            <li
              className={`block transition-all font-semibold ${
                isActive("/ourwork") ? "text-blue-500" : "hover:text-orange-500"
              }`}
            >
              <Link to="/ourwork" onClick={handleMenuClose}>Our Work</Link>
            </li>
            <li
              className={`block transition-all font-semibold ${
                isActive("/ourimpact") ? "text-blue-500" : "hover:text-orange-500"
              }`}
            >
              <Link to="/ourimpact" onClick={handleMenuClose}>Our Impact</Link>
            </li>
            <li
              className={`block transition-all font-semibold ${
                isActive("/aboutus") ? "text-blue-500" : "hover:text-orange-500"
              }`}
            >
              <Link to="/aboutus" onClick={handleMenuClose}>About Us</Link>
            </li>
            <li
              className={`block transition-all font-semibold ${
                isActive("/gallery") ? "text-blue-500" : "hover:text-orange-500"
              }`}
            >
              <Link to="/gallery" onClick={handleMenuClose}>Gallery</Link>
            </li>
          </ul>
          <button className="bg-[#0B1956] text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-all text-[13px] sm:text-[13px] md:text-[16px] lg:text-[16px] font-quicksand">
           <Link to="/donate" onClick={handleMenuClose}>Donate</Link>
          </button>
          <div className='hidden xs:block'>
          <hr  className=' border-[#0B1956] p-2 mr-8'  />
          </div>
         
        </nav>
      </div>
    </header>
  );
}

export default Header;
