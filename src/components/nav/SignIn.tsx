import { Button } from "../ui/button";

const SignIn = () => {
  return (
    <div className="flex gap-2 ">
      <Button>Log in</Button>
      <Button
        style={{ borderRadius: "5px" }}
        className="bg-gray-500 rounded-md text-white"
        variant="destructive"
      >
        Sign up
      </Button>
    </div>
  );
};

export default SignIn;
