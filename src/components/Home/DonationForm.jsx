import React from 'react';

const DonationForm = () => {
  return (
    <div className="bg-[#FB9EBB] min-h-screen flex items-center justify-center">
      <div className="w-[275.97px] sm:w-[418px] md:w-5/12 my-12 md:my-24 ">
      <h1 className="text-white text-[30px] md:text-[48px] font-normal leading-[100%] tracking-[0] text-center font-['Bebas_Neue'] mb-8">
  SUPPORT OUR CAUSE
</h1>
  <form className="space-y-2 md:space-y-4">
          <div>
            <label className="block text-gray-800 text-base mb-1" htmlFor="name">Name</label>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg p-2 lg:p-3 placeholder-gray-400"
              placeholder='Name'
              type="text"
              id="name"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-base mb-1" htmlFor="email">Email</label>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg p-2 lg:p-3 placeholder-gray-400"
              placeholder='Email'
              type="email"
              id="email"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-base mb-1" htmlFor="phone">Phone number</label>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg p-2 lg:p-3 placeholder-gray-400"
              type="text"
              id="phone"
              placeholder="IN +"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-base mb-1" htmlFor="amount">Donation Amount</label>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg p-2 lg:p-3 placeholder-gray-400"
              placeholder='Amount'
              type="text"
              id="amount"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-base mb-1" htmlFor="message">Message</label>
            <textarea
              className="w-full bg-white border border-gray-300 rounded-lg p-2 lg:p-3 h-24 placeholder-gray-400"
              id="message"
              placeholder='Message'
            ></textarea>
          </div>
          <button className="bg-[#0B1956] text-white font-bold rounded-lg py-3 px-4 w-48 block mx-auto mt-12">
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;