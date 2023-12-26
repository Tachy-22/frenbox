import { ArrowUp, MailIcon } from "lucide-react";
import Logo from "./nav/Logo";
import Link from "next/link";

const footerLinks = [
  {
    title: "Quicklinks",
    links: ["Support", "Contact"],
  },
  {
    title: "Social",
    links: ["Twitter", "LinkedIn"],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="flex md:flex-row flex-col justify-between items-center w-full mx-auto max-w-[85%] p-[3rem]  ">
        <div className="flex flex-col gap-[3rem] ">
          <Logo size={`2xl`} />
          <span className="flex  rounded-[5rem] transition-colors duration-500 border border-blue-400 hover:bg-blue-300/30 px-4 py-2 gap-3">
            <MailIcon />
            <a href="mailto:contact@frenbox.com">contact@frenbox.com</a>
          </span>
        </div>

        <div className="grid grid-cols-2 gap-6 pt-[3rem] md:pt-0">
          {footerLinks.map((group, index) => (
            <div key={index} className="flex flex-col">
              <small className="pb-4 text-gray-300">{group.title}</small>
              {group.links.map((link, idx) => (
                <p key={idx} className="">
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[85%] mx-auto flex justify-between items-center border-t py-[2rem]">
        <div className=" uppercase">Frenbox 2023</div>
        <div className="flex gap-2 cursor-pointer ">
          <ArrowUp /> <Link href="/">Back to top</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
