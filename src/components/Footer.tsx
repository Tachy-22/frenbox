import { ArrowUp, MailIcon } from "lucide-react";
import Logo from "./nav/Logo";
import Link from "next/link";

const footerLinks = [
  {
    title: "Quicklinks",
    links: [
      { social: "Support", link: "/" },
      { social: "Contact", link: "/" },
    ],
  },
  {
    title: "Social",
    links: [
      { social: "Twitter", link: "/" },
      { social: "LinkedIn", link: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="flex md:flex-row flex-col justify-between items-start w-full mx-auto max-w-[85%] md:p-[3rem]  ">
        <div className="flex flex-col gap-[3rem] ">
          <Logo size={`2xl`} />
          <span className="flex   rounded-[5rem] transition-colors duration-500 border border-blue-400 hover:bg-blue-300/30 px-4 py-2 gap-3">
            <MailIcon />
            <a href="mailto:contact@frenbox.com">contact@frenbox.com</a>
          </span>
        </div>

        <div className="flex items-start justify-between md:justify-end gap-6 pt-[3rem] md:pt-0 w-full brder">
          {footerLinks.map((group, index) => (
            <div key={index} className="flex flex-col w-fit ">
              <small className="pb-4 text-gray-300">{group.title}</small>
              {group.links.map(({ link, social }, idx) => (
                <Link
                  href={link}
                  key={idx}
                  className="hover:underline underline-offset-2"
                >
                  {social}
                </Link>
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
