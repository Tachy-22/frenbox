import CTAButton from "./CTAButton";
import DemoVideo from "./DemoVideo";
import RadialBlob from "./RadialBlob";

const Hero = () => {
  return (
    <div className="flex flex-col gap-[3rem] relative ">
      <RadialBlob position="-top-20 -right-[30rem]" />
      <div className="flex flex-col gap-4">
        <h1 className="capitalize text-center text-5xl flex flex-col font-semibold">
          <span className=""> The social platform around file</span>
          <span className=""> sharing and monitization</span>
        </h1>
        <p className=" text-center flex flex-col text-gray-300">
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
      </div>
      <CTAButton/>
      <DemoVideo />

      <RadialBlob position="-bottom-[30rem] -left-[30rem]" />
    </div>
  );
};

export default Hero;
