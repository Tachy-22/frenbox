"use client";
import React from "react";
import YouTube from "react-youtube";
import RadialBlob from "./RadialBlob";

const DemoVideo = () => {
  const videoId = "cQgKOLsAb-Q"; // Replace with your YouTube video ID

  const opts = {
    height: "490",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // Set to 1 to autoplay
    },
  };

  return (
    <>
      <div className="md:w-[60rem] h-[30rem]  z-0 bg-gray-400  rounded-lg mt-[5rem]">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </>
  );
};

export default DemoVideo;
