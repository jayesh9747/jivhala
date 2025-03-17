import logo1 from "../../assets/lg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0B1956] text-white py-8 lg:p-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 sm:grid-cols-3">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-[16px] leading-[20px] sm:text-[16px] sm:leading-[20px] md:text-[24px] md:leading-[29px] lg:text-[24px] lg:leading-[30px] font-quicksand mb-4">
              <Link to="/our-work">Our Work</Link>
            </h3>
            <ul>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]">
                <Link to="/our-impact">Our Impact</Link>
              </li>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]">
                <Link to="/our-work">Programs</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-[16px] leading-[20px] sm:text-[16px] sm:leading-[20px] md:text-[24px] md:leading-[29px] lg:text-[24px] lg:leading-[30px] font-quicksand mb-4">
              Company
            </h3>
            <ul>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]">
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-[16px] leading-[20px] sm:text-[16px] sm:leading-[20px] md:text-[24px] md:leading-[29px] lg:text-[24px] lg:leading-[30px] font-quicksand mb-4">
              <Link to="/donate">Donate</Link>
            </h3>
            <ul>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]">
                <Link to="/donate">Support Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Logo - Hidden on mobile, visible on larger screens */}
          <Link
            to="/"
            className="sm:col-start-4 sm:row-start-1 col-span-3 sm:col-span-1 hidden sm:block"
          >
            <div className="ml-28 sm:ml-28 md:ml-0 lg:ml-0 rounded-2xl flex justify-center items-center h-[40px] w-[110px] sm:h-[40px] sm:w-[110px] md:h-[90px] md:w-[200px] lg:h-[100px] lg:w-[250px]">
              <img
                src={logo1}
                alt="Logo"
                className="w-[78px] h-[78px] sm:w-[78px] sm:h-[78px] md:w-[142px] md:h-[142px] lg:w-[142px] lg:h-[142px] object-contain p-2"
              />
              {/* Text Section */}
              <div></div>
            </div>
          </Link>
          
          {/* Address Section */}
          <div className="col-span-3 md:col-span-4 mt-6 mb-6 sm:mt-8">
            <h3 className="font-semibold text-[16px] leading-[20px] sm:text-[16px] sm:leading-[20px] md:text-[24px] md:leading-[29px] lg:text-[24px] lg:leading-[30px] font-quicksand mb-2">
              Address
            </h3>
            <p className="text-[12px] leading-[18px] sm:text-[12px] sm:leading-[18px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]">
              Jivhala Foundation, Hingne Home Colony, Near Millennium National School, Karve Nagar, Pune, 411052.
            </p>
          </div>
          
          {/* Contact Section */}
          <div className="col-span-3 md:col-span-4 -mt-2 sm:mt-0">
            <h3 className="font-semibold text-[16px] leading-[20px] sm:text-[16px] sm:leading-[20px] md:text-[24px] md:leading-[29px] lg:text-[24px] lg:leading-[30px] font-quicksand mb-2">
              Contact
            </h3>
            <p className="text-[12px] leading-[18px] sm:text-[12px] sm:leading-[18px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]">
              8208769088 / 9049144902
            </p>
          </div>
          
          {/* Horizontal Line - After address and contact on mobile */}
          <hr className="border-t border-white mt-6 mb-6 col-span-3 block sm:hidden" />
          
          {/* Logo - Only visible on mobile, at the end of footer */}
          <Link
            to="/"
            className="col-span-3 block sm:hidden"
          >
            <div className="flex justify-center items-center">
              <img
                src={logo1}
                alt="Logo"
                className="w-[78px] h-[78px] object-contain p-2"
              />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;