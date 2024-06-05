
"use client";
import { useStateCtx } from "@/app/context/StateContext";
import { NAVLINKS } from "@/app/libs/constant";
import cn from "@/app/utils/twcx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { CiLogin, CiLogout } from "react-icons/ci";
import Button from "@/app/Ui/Button";

const MobileNav = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const [isActive, setIsActive] = useState("");
  const searchParams = useSearchParams().get("path");

  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
    }
  }, [searchParams]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowMobileMenu]);

  const handleCloseMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-20"
          onClick={handleCloseMenu}
        />
      )}
      <nav
        className={cn(
          "fixed inset-y-0 right-0 w-80 bg-white/30 backdrop-blur-lg flex flex-col items-center p-6 z-50 transition-transform duration-300",
          showMobileMenu ? "translate-x-0" : " translate-x-full"
        )}
      >
        <Button
          aria-label="close menu"
          type="button"
          className="outline-none text-primary text-2xl sm:text-4xl absolute top-2 right-2 h-12 w-12 rounded-full border focus:border-2 focus-visible:border-primary  flex justify-center items-center"
          onClick={handleCloseMenu}
        >
          <BsX />
        </Button>
        <div className="flex flex-col items-start gap-4 mt-8">
          {NAVLINKS.map((link) => (
            <Link
              href={link.link === "home" ? "/?path=home" : `/${link.link}`}
              key={link.id}
              onClick={() => {
                setIsActive(link.link);
                setShowMobileMenu(false);
              }}
              className={cn(
                "text-black relative font-medium text-lg capitalize before:bg- before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500",
                isActive === link.link ? "before:w-full text-primary-light" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 mt-auto">
          <Button
            href="/"
            type="button"
            className="bg-[#fff27b86] hover:bg-[#fff27b86] focus:bg-[#807500] px-8 py-2 rounded-md font-medium text-white"
          >
            Login
            <CiLogin className="ml-2" />
          </Button>
          <Button
            href="/"
            type="button"
            className="bg-[#fff27b86] hover:bg-[#fff27b86] focus:bg-[#807500] px-8 py-2 rounded-md font-medium text-white"
          >
            Logout
            <CiLogout className="ml-2" />
          </Button>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
