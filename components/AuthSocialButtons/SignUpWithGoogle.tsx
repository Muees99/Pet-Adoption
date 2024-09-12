import React, { useState } from "react";
import Image from "next/image";
import SignUpWithSocialsButton from "./SignUpWithSocialsButton";
import googleLogo from "@/public/assets/googleLogo.svg";
// import { BASE_URL } from "../../app/http/auth";

const SignUpWithGoogle = () => {
  // State to manage loading state of the button
  const [isloading, setIsLoading] = useState(false);

  // Function to handle the click event of the button
  const handleLinkClick = () => {
    // Set loading state to true when the button is clicked
    setIsLoading(true);

    // After 5 seconds, redirect the user to the Google sign-up page
    setTimeout(() => {
    //   window.location.href = `${BASE_URL}/google`; 18/5
    }, 5000);
  };
  // Render component
  return (
    // Render the custom button component
    // When clicked, handleLinkClick function will be called
    // isLoading state is passed to indicate loading state of the button
    // leftIcon is set to the Google logo image

    <SignUpWithSocialsButton
      onClick={handleLinkClick}
      isLoading={isloading}
      leftIcon={<Image src={googleLogo} alt="Google Logo" className="" />} // Set Google logo as left icon
    >
      Continue with Google
    </SignUpWithSocialsButton>
  );
};

export default SignUpWithGoogle;
