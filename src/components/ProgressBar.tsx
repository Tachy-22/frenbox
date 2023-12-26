"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const ProgressBar = () => {
  const barRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      ref={barRef}
      style={{ scaleX: scrollYProgress }}
      className="h-[0.3rem] rounded-2xl w-full bg-blue-500 sticky origin-top-left top-0 left-0 "
    />
  );
};

export default ProgressBar;
