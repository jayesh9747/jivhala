import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" rounded-lg  max-w-5xl w-full  py-16 md:p-12">
        <h1 className="text-[48px] leading-[60px]  font-bold text-center  font-quicksand mb-4">
          CONTACT US
        </h1>

        <p className="text-center  text-[16px] leading-[20px] font-quicksand mb-6">
          Let’s work together to empower dreams.
        </p>
        <div className="flex flex-col gap-8 items-center justify-center   ">
          <form className="">
            <div className="p-4  space-y-4 text-center">
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
                className="w-[276px] h-[36px] bg-[#304598] font-inter text-white text-[16px] leading-[24px] font-normal py-2 rounded-full hover:bg-blue-700 transition duration-300 text-center "
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
