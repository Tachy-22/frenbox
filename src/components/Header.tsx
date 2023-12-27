import ProgressBar from "./ProgressBar";
import Logo from "./nav/Logo";
import Nav from "./nav/Nav";
import SignIn from "./nav/SignIn";

const Header = () => {
  return (
    <header className="sticky top-0 flex flex-col z-30     ">
      <div className="w-full flex justify-between px-[1rem] py-[1rem]  items-center backdrop-blur-2xl">
        <Logo />
        <div className=" ">
          <Nav />
        </div>
        <div className="md:flex hidden ">
          <SignIn />
        </div>
      </div>
      <ProgressBar />
    </header>
  );
};

export default Header;
