import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "2xl" | "xl" | "lg" | "md" | "sm";
}

const Logo: React.FC<LogoProps> = ({ size = "lg" }) => {
  const getSizeClasses = () => {
    switch (size) {
      case "2xl":
        return "w-[18rem] h-[6rem]";
      case "xl":
        return "w-[12rem] h-[4rem]";
      case "lg":
        return "w-[9rem] h-[3rem]";
      case "md":
        return "w-[6rem] h-[2rem]";
      case "sm":
        return "w-[4.5rem] h-[1.5rem]";
      default:
        return "w-[9rem] h-[3rem]";
    }
  };

  return (
    <Link href="/">
      <Image
        className={getSizeClasses()}
        src="/FRENBOX.png"
        alt="logo"
        width={6110}
        height={1750}
      />
    </Link>
  );
};

export default Logo;
