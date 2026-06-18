import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] mb-6">
      <iframe
        src="https://www.google.com/maps?q=35.953717970726096,-86.81765886250717&hl=en&z=17&output=embed"
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location"
      />
    </div>
  );
};

export default Map;