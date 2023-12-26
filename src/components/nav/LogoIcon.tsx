import Image from "next/image";
import Link from "next/link";

const LogoIcon = () => {
  return (
    <Link href="/">
      <Image
        className="w-[1.5rem] h-[1.5rem]"
        src="/frenboxlogo.png"
        alt="LocoIcon"
        width={500}
        height={500}
      />
    </Link>
  );
};

export default LogoIcon;
