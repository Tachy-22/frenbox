const Clientels = [
  {
    type: "For Content Creators and Artists.",
    details:
      "Frenbox is tailored for content creators, artists, musicians, writers, and all creative individuals. Whether you're sharing art, music, videos, or written work, Frenbox provides a secure space to showcase and monetize your creations.",
  },
  {
    type: "For Small Business Owners.",
    details:
      "If you own a small business and want to share promotional material, product demos, or tutorials, Frenbox offers a streamlined platform for reaching your audience. Control access to your business-related content and engage directly with potential clients.",
  },
  {
    type: "For Educators and Trainers.",
    details:
      "Teachers, trainers, and educators can utilize Frenbox to share educational resources, course materials, and interactive lessons. The platform’s collaborative features and secure environment make it ideal for facilitating effective learning experiences.",
  },
];

const Clientel = () => {
  return (
    <section className="max-w-7xl px-[2rem] xl:px-0 py-[5rem] gap-[5rem] flex flex-col">
      <h3 className="text-3xl flex flex-col ">
        <span className="">Frenbox:</span>
        <span className="">
          Tailored for every{" "}
          <span className=" italic text-blue-400">Creative</span> journey
        </span>
      </h3>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-[2rem] ">
        {Clientels.map(({ type, details }, id) => {
          return (
            <div key={id} className="flex flex-col gap-1">
              <p className="text-2xl  w-[90%] capitalize">{type}</p>
              <p className="py-3 text-base text-gray-500">{details}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clientel;
