"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TestimonialCard = ({
  user,
  testimonial,
  color,
}: {
  user: string;
  testimonial: string;
  color?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={cardRef}
      className="rounded-xl p-4 z-20 bg-[#172121] flex flex-col gap-4 border border-gray-900/50"
    >
      <p className="text-base">{testimonial}</p>
      <div className="flex gap-2 items-center">
        <div
          className={` ${color} rounded-full w-[3rem] h-[3rem] p-4  text-center font-bold justify-center items-center text-xl flex `}
        >
          {user
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <p className="">{user}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
