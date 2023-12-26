const TestimonialCard = ({
  user,
  testimonial,
  color,
}: {
  user: string;
  testimonial: string;
  color?: string;
}) => {
  return (
    <div className="rounded-xl p-4 bg-[#172121] flex flex-col gap-4 border border-gray-900/50">
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
    </div>
  );
};

export default TestimonialCard;
