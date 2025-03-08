import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
    paymentOption: ""
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    navigate("/payment-confirmation");
  };

  return (
    <div className="min-h-screen bg-[#FB9EBB] flex flex-col items-center py-8">
      {/* Motivational text */}
      <div className="text-center text-white mb-4 md:mb-8 py-6 md:py-16 w-11/12">
        <h1 className="text-xl md:text-5xl font-bebas leading-[100%] tracking-[10%] font-normal uppercase mb-2">Your generosity matters!</h1>
        <h2 className="text-xl md:text-5xl font-bebas leading-[100%] tracking-[10%] font-normal uppercase mb-2">Together, we can create brighter futures.</h2>
      </div>
      
      {/* Donation form card */}
      <div className="w-10/12 md:max-w-2xl lg:max-w-3xl bg-white rounded-lg shadow-lg py-8 px-6 mb-16">
        <h2 className="text-xl md:text-3xl font-inter font-bold text-center text-black mb-1 ">
          Support Us
        </h2>
        <p className="text-center text-[10px] md:text-lg text-black mb-4 md:mb-6">
          Every contribution counts! Fill out the form below to be part of this transformative journey.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4 md:mb-6">
            <label htmlFor="name" className="block text-block text-xs md:text-md font-inter font-normal mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full py-1 px-2 md:p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4 md:mb-6">
            <label htmlFor="email" className="block text-block text-xs md:text-md font-inter font-normal mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full py-1 px-2 md:p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4 md:mb-6">
            <label htmlFor="phone" className="block text-block text-xs md:text-md font-inter font-normal mb-1">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full py-1 px-2 md:p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Donation Amount Field */}
          <div className="mb-4 md:mb-6">
            <label htmlFor="amount" className="block text-block text-xs md:text-md font-inter font-normal mb-1">
              Donation Amount:
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount"
              className="w-full py-1 px-2 md:p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Message/Note Field */}
          <div className="mb-4 md:mb-6">
            <label htmlFor="message" className="block text-block text-xs md:text-md font-inter font-normal mb-1">
              Message/Note:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full py-1 px-2 md:p-2 border border-gray-300 rounded h-24"
            />
          </div>

          {/* Payment Options Field */}
          <div className="mb-4 md:mb-6">
            <label htmlFor="paymentOption" className="block text-block text-xs md:text-md font-inter font-normal mb-1">
              Payment Options:
            </label>
            <input
              type="text"
              id="paymentOption"
              name="paymentOption"
              value={formData.paymentOption}
              onChange={handleChange}
              className="w-full py-1 px-2 md:p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-navy-blue text-white rounded font-medium  py-3 transition duration-300"
            style={{ backgroundColor: "#0B1956" }}
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPage;