'use client'
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          form_name: formData.name,
          form_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-24">
      <div className="max-w-screen-laptop-lg container flex flex-col md:flex-row items-start gap-12 md:gap-20">
        <div className="flex-1 w-full max-w-xl">
          <h1 className=" text-4xl sm:text-6xl font-medium mb-3 font-sora">Contact Us</h1>
          <p className="max-w-[400px] mb-12 text-gray-600">
            FreightX Shipping Inc - Neutral Logistic Solutions
          </p>

          <div className="space-y-2">
            {/* Location */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="sm:w-52">
                <p className="font-medium text-lg font-sora">Our Location</p>
              </div>
              <p className="max-w-xs text-gray-700 font-sora">
                Mallory Ln, Suite-100
                <br />
                Franklin, Tennessee, 37215, USA
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 gap-2">
              <div className="sm:w-52">
                <p className="font-medium text-lg font-sora">Phone</p>
              </div>
              <p className="max-w-xs text-gray-700 font-sora">(615) 613-8680</p>
            </div>

            {/* Sales */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 gap-2">
              <div className="sm:w-52">
                <p className="font-medium text-lg font-sora">Sales</p>
              </div>
              <p className="max-w-xs text-gray-700 font-sora">
                g.gaulbert@freightxusa.com
              </p>
            </div>

            {/* Customer Service */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 gap-2">
              <div className="sm:w-52">
                <p className="font-medium text-lg font-sora">Customer Service</p>
              </div>
              <p className="max-w-xs text-gray-700 font-sora">info@freightxusa.com</p>
            </div>

            {/* Management */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 gap-2">
              <div className="sm:w-52">
                <p className="font-medium text-lg font-sora">Management</p>
              </div>
              <p className="max-w-xs text-gray-700 font-sora">james@freightxusa.com</p>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <form onSubmit={sendEmail} className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="border p-3 w-full"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border p-3 w-full"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="border p-3 resize-none w-full"
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="text-white bg-surface-primary p-3 w-full"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
