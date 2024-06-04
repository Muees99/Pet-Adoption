import { NavLinkProps, FooterLinkProps } from "../@types";

export const NAVLINKS: NavLinkProps[] = [
  { id: 1, link: "new-arrivals", label: "New Arrivals" },
  { id: 2, link: "best-sellers", label: "Best Sellers" },
  { id: 3, link: "sales", label: "Sales" },
  { id: 4, link: "showroom", label: "Showroom" },
  // { id: 5, link: "cart", label: "cart" },
  { id: 5, link: "contact-us", label: "Contact Us" },
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
    { id: 3, link: "tel:+2348101097866", label: "Mobile" },
  ],
  services: [
    { id: 1, link: "", label: "Installations" },
    { id: 2, link: "", label: "Fittings" },
    {
      id: 3,
      link: "",
      label: "Customization",
    },
  ],
  accessories: [
    { id: 1, link: "", label: "Furniture Locks" },
    { id: 2, link: "", label: "Furniture hinges" },
    { id: 3, link: "", label: "Wraps & Covers" },
  ],
  link: "",
  label: "",
};
