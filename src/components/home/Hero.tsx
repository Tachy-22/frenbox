"use client";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import DemoVideo from "./DemoVideo";
import RadialBlob from "./RadialBlob";

const Hero = () => {
  return (
    <div className="flex flex-col gap-[3rem] relative items-center justify-center w-screen md:w-fit px-4 md:px-0 ">
      <RadialBlob position="-top-20 -right-[30rem]" />

      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="capitalize text-center md:text-5xl text-xl  flex flex-col font-semibold">
          <span className=""> The social platform around file</span>
          <span className=""> sharing and monitization</span>
        </h1>
        <p className=" text-center  text-sm flex flex-col text-gray-300">
          <span>
            {" "}
            Frenbox is a cloud-based storage platform that helps creators to
            backup,
          </span>
          <span className="">
            {" "}
            secure and monetize their content, while also connecting with their
            audience.
          </span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <CTAButton />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <DemoVideo />
      </motion.div>

      <RadialBlob position="-bottom-[30rem] -left-[30rem] " />
    </div>
  );
};

export default Hero;
