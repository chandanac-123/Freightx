'use client'
import { images } from "@/utility/images";
import Image from "next/image";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
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
    <div className="w-full  my-6">
      <div className="items-center flex-col md:flex-row flex gap-12">
        <div className="flex-1 w-full">
          <Image
            className="w-full h-full object-cover"
            src={images.ship}
            width={0}
            height={0}
            alt="get in touch"
          />
        </div>

        <div className="flex-1 w-full px-4 md:px-24">
            <h1 className="text-4xl mb-6 ">
            Get in touch

            </h1>
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
  );
};

export default GetInTouch;
