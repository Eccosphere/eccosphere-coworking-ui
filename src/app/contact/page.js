import ContactPage from "@/views/ContactUs/ContactPage";
import React from "react";

export const metadata = {
  title: "Contact Us | Eccosphere Coworking Noida",
  description:
    "Get in touch with Eccosphere for coworking space bookings, pricing, and tours.",
  keywords: "contact eccosphere, coworking contact, office inquiry",
  authors: [{ name: "Eccosphere Coworking" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.eccosphere.com/contact",
  },
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
