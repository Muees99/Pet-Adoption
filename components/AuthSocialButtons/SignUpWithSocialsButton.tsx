import React, { FC } from "react";
import Button, { ButtonVariants } from "../Ui/Button";
import useUserSession from "@/app/hook/Auth/useUserSession";

// Define ButtonProps interface
interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  href?: string;
  spinnerColor?: string;
  spinnerSize?: string | number;
}

const SignUpWithSocialsButton: FC<ButtonProps> = ({
  children,
  leftIcon,
  ...props
}) => {
  // Get setCurrentPathForOAuth function from useUserSession hook
  const { setCurrentPathForOAuth } = useUserSession();

  // Define onClick handler for the button
  const handleClick = () => {
    const url = window.location.pathname; // or any other way to get the URL
    setCurrentPathForOAuth(url); // Call setCurrentPathForOAuth with the URL
  };

  return (
    <Button
      className="w-full bg-white-100 text-custom-color20 border-custom-color21 border rounded-md hover:bg-white-100 hover:border-brand-green-primary sm:text-base flex justify-center items-center py-3 md:py-4 gap-2 mb-[32px]"
      onClick={handleClick} // Pass handleClick as onClick handler
      style={{ outline: "none" }} // Remove outline
      {...props}
      isLoading={false} // Ensure that isLoading is always false to prevent spinner from appearing
    >
      <div className="w-[20px]">{leftIcon}</div>
      <p className="text-center">{children}</p>
    </Button>
  );
};

export default SignUpWithSocialsButton;
