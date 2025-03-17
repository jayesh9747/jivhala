import React, { useState } from "react";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Amount: "",
    Message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setMessageType("");

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbycHCp4TaRGE3Okri2ondElXV-jug0L4WuqVWuAvZJfR05K18ECy_EdfnKjI9TO9v-F/exec";
      if (!scriptURL) {
        throw new Error("Google Script URL is not configured");
      }

      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      });


      setMessageType("success");
      setSubmitMessage("Thank you for your donation!");
      setFormData({
        Name: "",
        Email: "",
        Phone: "",
        Amount: "",
        Message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setMessageType("error");
      setSubmitMessage("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FB9EBB] min-h-screen flex items-center justify-center">
      <div className="w-[275.97px] sm:w-[418px] md:w-5/12 my-12 md:my-24 ">
        <h1 className="text-white text-[30px] md:text-[48px] font-normal leading-[100%] tracking-[0] text-center font-['Bebas_Neue'] mb-8">
          SUPPORT OUR CAUSE
        </h1>

        {submitMessage && (
          <div
            className={`bg-white p-2 rounded-lg mb-4 text-center ${
              messageType === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {submitMessage}
          </div>
        )}

        <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-gray-800 text-base mb-1"
              htmlFor="Name"
            >
              Name
            </label>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg p-2 lg:p-3 placeholder-gray-400"
              placeholder="Name"
              type="text"
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-800 text-base mb-1"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg p-2 lg:p-3 placeholder-gray-400"
              placeholder="Email"
              type="email"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-800 text-base mb-1"
              htmlFor="Phone"
            >
              Phone number
            </label>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg p-2 lg:p-3 placeholder-gray-400"
              type="tel"
              id="Phone"
              name="Phone"
              placeholder="IN +"
              value={formData.Phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-800 text-base mb-1"
              htmlFor="Amount"
            >
              Donation Amount
            </label>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg p-2 lg:p-3 placeholder-gray-400"
              placeholder="Amount"
              type="number"
              id="Amount"
              name="Amount"
              value={formData.Amount}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-800 text-base mb-1"
              htmlFor="Message"
            >
              Message
            </label>
            <textarea
              className="w-full bg-white border border-gray-300 rounded-lg p-2 lg:p-3 h-24 placeholder-gray-400"
              id="Message"
              name="Message"
              placeholder="Message"
              value={formData.Message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            className="bg-[#0B1956] text-white font-bold rounded-lg py-3 px-4 w-48 block mx-auto mt-12"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Donate Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
