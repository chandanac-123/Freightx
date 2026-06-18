import React from "react";

const ContactForm = () => {
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
              <p className="max-w-xs text-gray-700 font-sora">nikki@freightxusa.com</p>
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
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name"
              className="border  p-3 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border  p-3 w-full"
            />
            <textarea
              placeholder="Message"
              className="border  p-3 resize-none w-full"
            ></textarea>
            <button className="text-white bg-surface-primary p-3 w-full">
              Send Message
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
