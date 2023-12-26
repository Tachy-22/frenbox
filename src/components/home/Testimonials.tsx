import TestimonialCard from "../testimonial/TestimonialCard";
import RadialBlob from "./RadialBlob";

const TestimonialData = [
  {
    testimonial:
      "It has really been helpful in organising course materials during this exam period.",
    user: "Oloye Praise",
    color: "bg-red-400",
  },
  {
    testimonial:
      "Frenbox turned my backup routine into a breeze! Now, not only is my data safely stored, but I also have the chance to monetize it. Excited for v2!",
    user: "Eze Clinton",
    color: "bg-blue-400",
  },
  {
    testimonial:
      "As a content creator, Frenbox is a game-changer. Finally, a platform that values my data and offers a unique opportunity to earn. Count me in for v2!",
    user: "Oluwafemi A.",
    color: "bg-gray-300",
  },
  {
    testimonial:
      "Frenbox understands the evolving needs of users. Version 2 promises to be a game-changer, and I'm thrilled to be on the waitlist. Secure, smart, and monetizable – that's the Frenbox way!",
    user: "Shalom Toyin",
    color: "bg-gray-800",
  },
  {
    testimonial:
      "I love that the community feature is going to be implemented in Frenbox V2. I cannot wait to connect with the Frenbox audience. Buzzing for V2.",
    user: "Anonymous",
    color: "bg-gray-300",
  },
  {
    testimonial:
      "Frenbox doesn't just protect my files; it empowers me to make the most of them. Joining the waitlist for v2 is a no-brainer – can't wait to see what's next!",
    user: "Olumide A.",
    color: "bg-red-400",
  },
  {
    testimonial:
      "Frenbox's user-friendly interface made the transition to cloud storage a breeze for me. Joining the waitlist for v2 is a no-brainer – I'm excited to see how they continue to prioritize user experience.",
    user: "Anonymous",
    color: "bg-gray-300",
  },
  {
    testimonial:
      "Monetizing my backed-up files with Frenbox has been an unexpected but welcome bonus. Can't wait to see how they enhance this feature in v2!",
    user: "Pelumi",
    color: "bg-blue-400",
  },
  {
    testimonial:
      "The seamless sync across devices is what sold me on Frenbox. Whether I'm on my laptop or phone, my files are always up-to-date.",
    user: "Adekunle T.",
    color: "bg-red-700",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-[1rem] md:pt-[6rem] md:pb-[5rem] w-full rounded-[2rem] md:rounded-[5rem] border border-gray-700 overflow-hidden ">
      <RadialBlob position="-top-10 -right-[10rem]" />
      <h3 className=" text-4xl text-center z-20 md:py-[5rem] py-[2rem]">
        Here’s what people have said about Frenbox 🤭
      </h3>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 max-w-[80vw] mx-auto z-20">
        {TestimonialData.map(({ testimonial, user, color }, id) => {
          return (
            <TestimonialCard
              key={id}
              testimonial={testimonial}
              user={user}
              color={color}
            />
          );
        })}
      </div>
      <RadialBlob position="-bottom-[10rem] -left-[10rem]" />{" "}
    </section>
  );
};

export default Testimonials;
