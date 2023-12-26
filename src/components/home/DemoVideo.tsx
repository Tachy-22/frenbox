import React from "react";

const DemoVideo = () => {
  return (
    <div className="w-[60rem] h-[30rem] bg-gray-400 rounded-lg z-20">
      <iframe
        title="YouTube Video"
        width="100%"
        height="100%"
        src="https://youtu.be/cQgKOLsAb-Q?si=tZCiqUAH1yBhdxdr"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default DemoVideo;
