// "use client";

// import cn from "@/app/utils/twcx";
// import { FOOTER_LINKS } from "@/app/libs/constant";
// import { FaGithub, FaXTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="w-full h-full  bg-[#000] pt-5 lg:pt-10 ">
//       <div className=" max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//         <div className="w-full h-full max-container flex flex-col justify-between pb-8">
//           <div className="flex flex-col gap-y-5 ">
//             <div className="w-full max-[550px]:flex-col flex justify-between lg:justify-start items-center max-[550px]:items-start max-[550px]:gap-y-5">
//               <div className="w-full min-[550px]:max-w-[300px] sm:max-w-[380px] lg:hidden ">
//                 <h2 className="w-[270px] text-[14px] leading-[175%] text-[#ffff]">
//                   We prioritize the well-being and compatibility of each furry
//                   family member to ensure they find a loving and lasting home.
//                   From thorough health checks to careful temperament
//                   assessments, we select only the most suitable companions,
//                   ensuring happiness and harmony for years to come.
//                 </h2>
//               </div>
//             </div>
//             <div className="flex max-[550px]:flex-col max-[550px]:gap-y-7 w-full justify-between items-start [&>ul>span]:text-white-100 [&>ul>span]:text-base [&>ul>span]:font-semibold [&>ul>a]:text-white-100 [&>ul>a]:text-base ">
//               <div className="w-full max-w-[380px] hidden lg:block">
//                 <h2 className="w-[270px] text-[14px] leading-[175%] text-[#ffff]">
//                   We prioritize the well-being and compatibility of each furry
//                   family member to ensure they find a loving and lasting home.
//                   From thorough health checks to careful temperament
//                   assessments, we select only the most suitable companions,
//                   ensuring happiness and harmony for years to come.
//                 </h2>
//                 <div className="flex items-end mb-4 mt-2 text-[#ffff]">
//                   {" "}
//                   {/*Flex container for icons */}
//                   {/* First icon */}
//                   <Link href="https://github.com/Muees99">
//                     <FaGithub className="text-white-100 text-2xl mr-4" />{" "}
//                   </Link>
//                   {/* Second icon */}
//                   <Link href="https://twitter.com/Muees__99">
//                     <FaXTwitter className="text-white-100 text-2xl mr-4" />{" "}
//                   </Link>
//                   {/* Third icon */}
//                   <Link href="https://www.linkedin.com/in/muees-alabi-77b14b239/">
//                     <FaLinkedin className="text-white-100 text-2xl " />{" "}
//                   </Link>
//                 </div>
//               </div>

//               <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3 text-[#ffff]">
//                 <span>Custom Care</span>
//                 {FOOTER_LINKS.Customercare.map(
//                   (link: { id: number; link: string; label: string }) => (
//                     <Link
//                       href={link.link}
//                       key={link.id}
//                       className=" hover:font-medium hover:text-primary transition-colors duration-300"
//                     >
//                       {link.label}
//                     </Link>
//                   )
//                 )}
//               </ul>

//               <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3 text-[#ffff]">
//                 <span>Services</span>
//                 {FOOTER_LINKS.services.map(
//                   (link: { id: number; link: string; label: string }) => (
//                     <Link
//                       href={link.link}
//                       key={link.id}
//                       className={cn(
//                         "capitalize hover:font-medium hover:text-primary transition-colors duration-300",
//                         {
//                           uppercase: link.label === "Services",
//                         }
//                       )}
//                     >
//                       {link.label}
//                     </Link>
//                   )
//                 )}
//               </ul>
//               <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3 text-[#ffff]">
//                 <span>Accessories</span>
//                 {FOOTER_LINKS.accessories.map(
//                   (link: { id: number; link: string; label: string }) => (
//                     <Link
//                       href={link.link}
//                       key={link.id}
//                       className={cn(
//                         "capitalize hover:font-medium hover:text-primary transition-colors duration-300",
//                         {
//                           uppercase: link.label === "accessories",
//                         }
//                       )}
//                     >
//                       {link.label}
//                     </Link>
//                   )
//                 )}
//               </ul>
//             </div>
//           </div>
//           <div className="text-center text-[#fff27b86] text-sm mt-4">
//             © Copyright Muees Alabi 2024. All Rights Reserved.
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import cn from "@/app/utils/twcx";
import { FOOTER_LINKS } from "@/app/libs/constant";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoPaw } from "react-icons/io5";
import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/Muees99", icon: FaGithub, label: "GitHub" },
  {
    href: "https://twitter.com/Muees__99",
    icon: FaXTwitter,
    label: "Twitter / X",
  },
  {
    href: "https://www.linkedin.com/in/muees-alabi-77b14b239/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer
      className="w-full relative overflow-hidden"
      style={{ background: "#0a0805" }}
    >
      {/* Top amber divider */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(200,151,58,0.4), transparent)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 100%, #1a1205 0%, transparent 70%)",
        }}
      />

      {/* Watermark paw */}
      <IoPaw
        className="pointer-events-none absolute"
        style={{
          width: 280,
          height: 280,
          color: "#c8973a",
          opacity: 0.03,
          bottom: "-40px",
          right: "-40px",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-[5%] py-16">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 lg:gap-8 pb-12"
          style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}
        >
          {/* ── Brand column ── */}
          <div className="flex flex-col gap-6">
            {/* Logo mark */}
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(200,151,58,0.15)",
                  border: "1px solid rgba(200,151,58,0.3)",
                }}
              >
                <IoPaw style={{ color: "#c8973a", width: 16, height: 16 }} />
              </div>
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                PawAdopt
              </span>
            </div>

            <p
              className="text-sm leading-relaxed max-w-[260px]"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b5e50" }}
            >
              We prioritize the well-being of every furry family member —
              thorough health checks, careful temperament assessments, and
              lasting matches between pets and people.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(200,151,58,0.08)",
                    border: "1px solid rgba(200,151,58,0.2)",
                    color: "#7a6a5a",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(200,151,58,0.18)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#c8973a";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(200,151,58,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(200,151,58,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#7a6a5a";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(200,151,58,0.2)";
                  }}
                >
                  <Icon style={{ width: 15, height: 15 }} />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Link columns ── */}
          {(
            [
              { heading: "Customer Care", links: FOOTER_LINKS.Customercare },
              { heading: "Services", links: FOOTER_LINKS.services },
              { heading: "Accessories", links: FOOTER_LINKS.accessories },
            ] as {
              heading: string;
              links: { id: number; link: string; label: string }[];
            }[]
          ).map(({ heading, links }) => (
            <ul key={heading} className="flex flex-col gap-4">
              <li>
                <span
                  className="text-xs font-semibold tracking-[0.18em] uppercase"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: "#c8973a",
                  }}
                >
                  {heading}
                </span>
              </li>
              <li
                className="h-px w-8"
                style={{ background: "rgba(200,151,58,0.25)" }}
              />
              {links.map(
                (link: { id: number; link: string; label: string }) => (
                  <li key={link.id}>
                    <Link
                      href={link.link}
                      className={cn(
                        "text-sm transition-colors duration-200 capitalize",
                      )}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "#6b5e50",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "#c8973a")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "#6b5e50")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p
            className="text-xs"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#3d3329",
            }}
          >
            © 2024 Muees Alabi. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#c8973a", opacity: 0.5 }}
            />
            <p
              className="text-xs"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#3d3329",
              }}
            >
              Made with love for every paw
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;