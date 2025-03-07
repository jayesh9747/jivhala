import React from 'react';

const DonationForm = () => {
  return (
    <div className="bg-pink-300 min-h-screen flex items-center justify-center">
      <div className="w-96">
        <h1 className="text-white text-3xl font-bold text-center mb-8">SUPPORT OUR CAUSE</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-800 text-base mb-1" htmlFor="name">Name</label>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg p-3 placeholder-gray-400"
              type="text"
              id="name"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-base mb-1" htmlFor="email">Email</label>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg p-3 placeholder-gray-400"
              type="email"
              id="email"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-base mb-1" htmlFor="phone">Phone number</label>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg p-3 placeholder-gray-400"
              type="text"
              id="phone"
              placeholder="IN +"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-base mb-1" htmlFor="amount">Donation Amount</label>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg p-3 placeholder-gray-400"
              type="text"
              id="amount"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-base mb-1" htmlFor="message">Message</label>
            <textarea
              className="w-full bg-white border border-gray-300 rounded-lg p-3 h-24 placeholder-gray-400"
              id="message"
            ></textarea>
          </div>
          <button className="bg-blue-800 text-white font-bold rounded-lg py-3 px-4 w-48 block mx-auto mt-6">
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;