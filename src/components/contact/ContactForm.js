import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full py-24">
      <div className="max-w-screen-laptop-lg container items-center flex-col md:flex-row flex gap-12">
        <div className="flex-1 w-full">
          <h1 className=" text-4xl sm:text-6xl font-medium mb-3">Contact Us</h1>
          <p className="max-w-[400px] mb-12 text-gray-600">
            FreightX Shipping Inc - Neutral Logistic Solutions
          </p>

          <div className="space-y-2">
            {/* Location */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="sm:w-52">
                <p className="font-medium text-lg">Our Location</p>
              </div>
              <p className="max-w-xs text-gray-700">
                Mallory Ln, Suite-100
                <br />
                Franklin, Tennessee, 37215, USA
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 gap-2">
              <div className="sm:w-52">
                <p className="font-medium text-lg">Phone</p>
              </div>
              <p className="max-w-xs text-gray-700">(615) 613-8680</p>
            </div>

            {/* Sales */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 gap-2">
              <div className="sm:w-52">
                <p className="font-medium text-lg">Sales</p>
              </div>
              <p className="max-w-xs text-gray-700">
                g.gaulbert@freightxusa.com
              </p>
            </div>

            {/* Customer Service */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 gap-2">
              <div className="sm:w-52">
                <p className="font-medium text-lg">Customer Service</p>
              </div>
              <p className="max-w-xs text-gray-700">nikki@freightxusa.com</p>
            </div>

            {/* Management */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 gap-2">
              <div className="sm:w-52">
                <p className="font-medium text-lg">Management</p>
              </div>
              <p className="max-w-xs text-gray-700">james@freightxusa.com</p>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
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
  );
};

export default ContactForm;
