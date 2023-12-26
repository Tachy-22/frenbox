import Link from "next/link";
import { Button } from "../ui/button";

const CTAButton = () => {
  return (
    <Link
      href={`/signIn`}
      className="px-4 py-2 rounded-[3rem] border-2 w-fit mx-auto border-blue-400 hover:bg-blue-400/30 transition-colors duration-700"
    >
      Join Frenbox - It&apos;s Free
    </Link>
  );
};

export default CTAButton;
