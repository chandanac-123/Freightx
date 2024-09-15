import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full py-24">
      <div className="max-w-screen-laptop-lg container items-center flex-col md:flex-row flex gap-12">
        <div className="flex-1 w-full">
          <h1 className=" text-4xl sm:text-6xl font-medium mb-3">Contact Us</h1>
          <p className="max-w-[400px] mb-12 text-gray-600">
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am,
            velit rutrum dictum lobortis turpis.
          </p>

          <div>
            <p className=" font-medium mb-1">Support Centar</p>
            <p>
              <a
                href="mailto:info@example.com"
                className="text-2xl font-medium"
              >
                info@example.com
              </a>
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="max-w-52">
              <p className="font-medium text-lg mb-1">Our Location</p>
              <p className="max-w-52">
                West 21th Street, New York, NY City 10010
              </p>
            </div>
            <div className="max-w-52">
              <p className="font-medium text-lg mb-1">Write to us</p>
              <a href="mailto:info@example.com">info@example.com</a>
              <p>+17125425685</p>
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
