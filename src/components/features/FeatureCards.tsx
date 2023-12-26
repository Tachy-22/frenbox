import LogoIcon from "../nav/LogoIcon";

const FeatureCards = ({
  description,
  title,
  details,
}: {
  description: string;
  title: string;
  details: string;
}) => {
  return (
    <div className="border rounded-xl border-gray-700 flex flex-col gap-4 p-[2rem]">
      <span className="flex gap-2 bg-gray-700/60 rounded-3xl p-1 px-3 items-center w-fit">
        <LogoIcon />
        <span>{description}</span>
      </span>
      <h3 className="text-3xl">{title}</h3>
      <p className="text-gray-300">{details}</p>
    </div>
  );
};

export default FeatureCards;
