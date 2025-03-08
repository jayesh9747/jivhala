import React from "react";

const Contact = () => {
  return (
    <div className="h-auto bg-white flex items-center justify-center "
    style={{ boxShadow: "0px 0px 1.3px 0px #00000040" }}>
      <div className=" rounded-lg max-w-xs md:max-w-5xl w-full  py-12 md:p-12">
      <h1 className="font-['Bebas_Neue'] font-normal text-[30px] md:text-[48px] leading-[100%] tracking-[0%] text-center mt-4 md:mt-8 mb-1 md:mb-4 ">
          CONTACT US
        </h1>

        <p className="text-center text-md md:text-2xl leading-[20px] font-quicksand mb-6">
          Let’s work together to empower dreams.
        </p>
        <div className="flex flex-col gap-8 items-center justify-center ">
          <form className="">
            
            <div className="px-2 space-y-4 text-center mb-6">
              
              <input
                type="email"
                placeholder="Email"
                className="w-full max-w-md  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="text"
                placeholder="Phone"
                className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <textarea
                placeholder="Address"
                rows="4"
                className="w-full max-w-md  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#0B1956] px-24 font-inter text-white text-[16px] leading-[24px] font-normal py-3 rounded-lg  transition duration-300 text-center "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
