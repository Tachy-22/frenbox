import React from "react";
import FeatureCards from "../features/FeatureCards";
import CTAButton from "./CTAButton";

const FeatureCardData = [
  {
    title: "Backup and secure your files.",
    details:
      "Frenbox ensures the safety of your files with our automatic backup functionality, preserving your valuable content. Rest assured with our military-grade security protocols, safeguarding your data from unauthorized access and ensuring peace of mind for creators.",
    description: "file backup and security",
  },
  {
    title: "Streamlined content discovery.",
    details:
      "Frenbox redefines how you discover and share content. No more cumbersome links or restricted access. With our platform, you can effortlessly search for and access each other's backed-up content. It's a revolution in content sharing, designed to make your life easier.",
    description: "say goodbye to limitations",
  },
  {
    title: "Monetize and cash in on your creativity. ",
    details:
      "Frenbox puts you in the driver's seat when it comes to your uploaded content. Decide who can access it and how they view it. Maintain complete control over your content, ensuring they're shared on your terms.",
    description: "turn passion into profit",
  },
  {
    title: "Connect with your audience.",
    details:
      "Frenbox is more than a platform; it's a community. Connect directly with your audience through forums and private chats. Gain valuable insights into your audience’s preferences our feedback and analytics tool, helping you tailor your content to their needs.",
    description: "join the community",
  },
];

const Features = () => {
  return (
    <section className="bg-[#172121] flex flex-col gap-[4rem] rounded-[5rem] max-w-7xl mt-[20rem]  border border-gray-700 p-[4rem] z-20">
      <div className="">
        <h2 className="text-start text-3xl font-bold ">
          Empowering
          <span className="text-blue-600 px-1">Creators:</span>
        </h2>
        <h2 className="text-start text-3xl font-bold ">
          Frenbox
          <span className="text-blue-600 italic px-1">features</span> at a
          glance
        </h2>
      </div>
      <div className="grid  xl:grid-cols-2  gap-[2rem]">
        {FeatureCardData.map((card, index) => (
          <FeatureCards
            key={index}
            title={card.title}
            details={card.details}
            description={card.description}
          />
        ))}
      </div>
      <CTAButton />
    </section>
  );
};

export default Features;
