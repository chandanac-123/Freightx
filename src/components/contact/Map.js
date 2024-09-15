import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] mb-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8207529457295!2d-74.00187892330462!3d40.7439695356569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bbbf88c0b9%3A0xd9cee07147623496!2sW%2021st%20St!5e0!3m2!1sen!2sin!4v1726380280646!5m2!1sen!2sin"
       
        className="w-full h-full"
       
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
