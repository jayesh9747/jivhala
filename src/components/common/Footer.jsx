import logo1 from "../../assets/lg.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#0B1956] text-white py-8 lg:p-20">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 sm:grid-cols-3  ">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-[16px] leading-[20px] sm:text-[16px] sm:leading-[20px] md:text-[24px] md:leading-[29px] lg:text-[24px] lg:leading-[30px] font-quicksand mb-4">  <Link to="/ourwork">Our Work</Link></h3>
            <ul>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]">Our Impact</li>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]">Programs</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-[16px] leading-[20px] sm:text-[16px] sm:leading-[20px] md:text-[24px] md:leading-[29px] lg:text-[24px] lg:leading-[30px] font-quicksand mb-4  ">Company</h3>
            <ul>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]"><Link to="/aboutus">About Us</Link></li>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]">Gallery</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-[16px] leading-[20px] sm:text-[16px] sm:leading-[20px] md:text-[24px] md:leading-[29px] lg:text-[24px] lg:leading-[30px] font-quicksand mb-4"><Link to="/getinvolved">Donate</Link></h3>
            <ul>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]">Donate</li>
            </ul>
          </div>

          {/* Column 4: Logo */}
          {/* <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2   ">
              <div className="bg-white rounded-full p-4 ">
                <img
                  src={logo1}
                  alt="ITFFC Logo"
                  className="w-12 h-12"
                />
               
                <h3 className="text-xl font-bold">ITFFC</h3>
                <p className="text-sm">Innocent Times Foundation For Children</p>
             
              </div>
              
            </div>
         </div> */}<Link to="/">
            <div className=" ml-28 sm:ml-28 md:ml-0 lg:ml-0  rounded-2xl flex justify-center items-center h-[40px] w-[110px] sm:h-[40px] sm:w-[110px] md:h-[90px] md:w-[200px] lg:h-[100px] lg:w-[250px]">
        <img
          src={logo1} // Replace with the correct image path
          alt="ITFFC Logo"
          className="w-[78px] h-[78px]  sm:w-[78px] sm:h-[78px] md:w-[142px] md:h-[142px] lg:w-[142px] lg:h-[142px] object-contain p-2"
        />
      {/* Text Section */}
       <div>
        
      </div>

      </div> </Link>         
        </div>
        {/* Horizontal Line */}
        <hr className="border-t border-white mt-10 mb-24 md:mb-10 hidden md:visible" />
      </div>
    </footer>
  );
};

export default Footer;
