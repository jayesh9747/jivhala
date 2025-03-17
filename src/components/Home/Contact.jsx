import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: ""
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });
    
    try {
      // Call the Netlify function
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          subject: "New Contact Form Submission",
          message: `Phone: ${formData.phone}\nAddress: ${formData.address}`
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ email: "", phone: "", address: "" });
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setStatus({ submitting: false, success: false, error: null });
        }, 3000);
      } else {
        throw new Error(data.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        submitting: false,
        success: false,
        error: error.message || 'Failed to send email'
      });
    }
  };

  return (
    <div 
      className="h-auto bg-white flex items-center justify-center"
      style={{ boxShadow: "0px 0px 1.3px 0px #00000040" }}
    >
      <div className="rounded-lg max-w-xs md:max-w-5xl w-full py-12 md:p-12">
        <h1 className="font-['Bebas_Neue'] font-normal text-[30px] md:text-[48px] leading-[100%] tracking-[0%] text-center mt-4 md:mt-8 mb-1 md:mb-4">
          CONTACT US
        </h1>
        
        <p className="text-center text-md md:text-2xl leading-[20px] font-quicksand mb-6">
          Let's work together to empower dreams.
        </p>
        
        <div className="flex flex-col gap-8 items-center justify-center">
          <form onSubmit={handleSubmit}>
            <div className="px-2 space-y-4 text-center mb-6">
              {status.success && (
                <div className="text-green-600 font-semibold">
                  Your message has been sent successfully!
                </div>
              )}
              
              {status.error && (
                <div className="text-red-600 font-semibold">
                  Error: {status.error}
                </div>
              )}
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                rows="4"
                className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={status.submitting}
                className="bg-[#0B1956] px-24 font-inter text-white text-[16px] leading-[24px] font-normal py-3 rounded-lg transition duration-300 text-center"
              >
                {status.submitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;