import CTAButton from "./CTAButton";

const CTA = () => {
  return (
    <section className="w-full flex flex-col gap-[4rem] justify-center items-center p-[6rem] z-20">
      <h3 className="flex flex-col w-fit text-3xl md:text-5xl gap-2 font-bold">
        <span className="">Frenbox is where</span>
        <span className="flex gap-3">
          <span className="text-red-500 italic hand-writing">Creativity</span>{" "}
          Thrives.
        </span>
      </h3>
      <CTAButton />
    </section>
  );
};

export default CTA;
