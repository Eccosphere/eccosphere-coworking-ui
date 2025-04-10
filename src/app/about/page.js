import AboutPage from "@/views/About/AboutPage";
import React from "react";

export const metadata = {
  title: "About Us | Eccosphere Coworking",
  description:
    "Learn more about Eccosphere Coworking, our mission, team, and services.",
  keywords:
    "about eccosphere, coworking space, team, storyabout eccosphere, coworking space, team, story",
  authors: [{ name: "Eccosphere Coworking" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.eccosphere.com/about",
  },
};

const About = () => {
  return <AboutPage />;
};

export default About;
