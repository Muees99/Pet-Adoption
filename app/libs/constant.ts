import { NavLinkProps, FooterLinkProps } from "../@types";

export const NAVLINKS: NavLinkProps[] = [
  { id: 1, link: "about-us", label: "About us" },
  { id: 2, link: "puppies", label: "Puppies" },
  { id: 3, link: "services", label: "Services" },
  { id: 4, link: "medi-care", label: "Medi-Care" },
  { id: 5, link: "pet-shop", label: "Pet Shop" },
  { id: 6, link: "contact-us", label: "Contact Us" },
  // { id: 5, link: "cart", label: "cart" },
];

export const FOOTER_LINKS: FooterLinkProps = {
  Customercare: [
    {
      id: 1,
      link: "mailto:mueesalabi294@gmail.com",
      label: "mueesalabi294@gmail.com",
    },
    {
      id: 2,
      link: "sms:muees99@icloud.com",
      label: " muees99@icloud.com",
    },
    { id: 3, link: "tel:+2348101097866", label: "Terms & Conditions" },
    { id: 4, link: "", label: "Meet the Team" },
  ],
  services: [
    { id: 1, link: "", label: "Vetenary Clinic" },
    { id: 2, link: "", label: "Training and Guidance" },
    {
      id: 3,
      link: "",
      label: "Day Care",
    },
    { id: 4, link: "", label: "Meal Plans" },
  ],
  accessories: [
    { id: 1, link: "", label: "Pet Shop" },
    { id: 2, link: "", label: "Cleaning Kits" },
    { id: 3, link: "", label: "Wraps & Covers" },
    { id: 4, link: "", label: "Redeem Coupons and Gift"},
  ],
  link: "",
  label: "",
};
