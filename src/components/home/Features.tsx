import React from "react";
import FeatureCards from "../features/FeatureCards";
import CTAButton from "./CTAButton";

const FeatureCardData = [
  {
    title: "Backup and secure your files.",
    details:
      "Frenbox ensures the safety of your files with our automatic backup functionality, preserving your valuable content. Rest assured with our military-grade security protocols, safeguarding your data from unauthorized access and ensuring peace of mind for creators.",
    description: "file backup and security",
    tags: [
      "🔒🔄 Automated File Protection",
      "🔐🛡️ Military-grade Data Security",
    ],
  },
  {
    title: "Streamlined content discovery.",
    details:
      "Frenbox redefines how you discover and share content. No more cumbersome links or restricted access. With our platform, you can effortlessly search for and access each other's backed-up content. It's a revolution in content sharing, designed to make your life easier.",
    description: "say goodbye to limitations",
    tags: [
      "🔍🚀 Effortless Content Exploration",
      "🤝💻 Seamless Content Sharing",
    ],
  },
  {
    title: "Monetize and cash in on your creativity. ",
    details:
      "Frenbox puts you in the driver's seat when it comes to your uploaded content. Decide who can access it and how they view it. Maintain complete control over your content, ensuring they're shared on your terms.",
    description: "turn passion into profit",
    tags: ["💰🎨 Empower Your Earnings", "🕹️🔐 Total Content Control"],
  },
  {
    title: "Connect with your audience.",
    details:
      "Frenbox is more than a platform; it's a community. Connect directly with your audience through forums and private chats. Gain valuable insights into your audience’s preferences our feedback and analytics tool, helping you tailor your content to their needs.",
    description: "join the community",
    tags: [
      "🗣️🤝 Direct Audience Interaction",
      "📊🎯 Insightful Audience Engagement",
    ],
  },
];

const Features = () => {
  return (
    <section className="bg-[#172121] flex flex-col gap-[3rem] md:gap-[4rem] rounded-[2rem] md:rounded-[5rem] max-w-full md:max-w-7xl mt-[10rem]  border border-gray-700 md:p-[4rem] p-[2rem] z-20 mx-auto">
      <div className="">
        <h2 className="text-center md:text-start text-2xl md:text-3xl font-bold ">
          Empowering
          <span className="text-blue-600 px-1">Creators:</span>
        </h2>
        <h2 className="text-center md:text-start text-2xl md:text-3xl font-bold ">
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
            tags={card.tags}
          />
        ))}
      </div>
      <CTAButton />
    </section>
  );
};

export default Features;
