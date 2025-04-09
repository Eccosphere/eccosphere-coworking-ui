import React from "react";
import { FaBullseye, FaGlobe, FaHandshake } from "react-icons/fa";
import mohtashimAquil from "../../../assets/teamImages/mohtashim_aquil.jpeg";
import gautamDuggal from "../../../assets/teamImages/gautam_duggal.jpg";
import sameerIqbal from "../../../assets/teamImages/blue-circle-with-white-user.avif";
import img from "../../../assets/spaceImages/IMG_20181013_151720-01-01.jpeg";
import img1 from "../../../assets/images/Tree_1.jpg";
import img2 from "../../../assets/spaceImages/1(1).jpg";
import img3 from "../../../assets/spaceImages/2(1).jpg";

export const missionAndVision = [
  {
    id: 1,
    title: "Mission",
    description:
      "To inspire, empower, and connect individuals in a future-proof workplace, where collaboration and continuous learning thrive.",
  },
  {
    id: 2,
    title: "Vision",
    description:
      " To revolutionize the workspace concept in India, creating a community-driven hub for professionals, startups, and freelancers.",
  },
  {
    id: 3,
    title: "Goals",
    description:
      "Goals define clear objectives for growth, success, and impact, ensuring progress through strategic planning, innovation, and continuous improvement.",
  },
];

export const getIcon = (type) => {
  switch (type) {
    case "mission":
      return <FaHandshake size={100} color="#e1ffff" />; // Rocket for Mission
    case "vision":
      return <FaGlobe size={100} color="#e1ffff" />; // Globe for Vision
    case "goals":
      return <FaBullseye size={100} color="#e1ffff" />; // Target for Goals
    default:
      return null;
  }
};

export const teamMembers = [
  {
    id: 1,
    name: "Gautam Duggal",
    role: "Co-Founder & CEO",
    image: gautamDuggal,
    bio: "Experienced print management consultant with a passion for flexible workspaces.",
  },
  {
    id: 2,
    name: "Mohtashim Aquil",
    role: "Director",
    image: mohtashimAquil,
    bio: "Marketing expert dedicated to brand growth and community building.",
  },
  {
    id: 3,
    name: "Sameer Iqbal",
    role: "Co-Director",
    image: sameerIqbal,
    bio: "Ensuring seamless operations and an efficient coworking experience.",
  },
];

export const whyChooseUs = [
  {
    id: 1,
    title: "A Workspace That Feels Like Home",
    description:
      "We designed a space where you would love to return to every day.",
    images: img,
  },
  {
    id: 2,
    title: "Creativity & Innovation Hub",
    description:
      "Our environment is designed to spark creativity, innovation, and breakthroughs.",
    images: img1,
  },
  {
    id: 3,
    title: "Community-Driven",
    description:
      "Network with entrepreneurs, freelancers, and small businesses to collaborate and scale together.",
    images: img2,
  },
  {
    id: 4,
    title: "Wellness & Productivity",
    description: [
      { list: "Indoor Park & Green Spaces for a stress-free work experience." },
      {
        list: "Fitness Center & Meditation Zones to boost mind & body wellness.",
      },
    ],
    images: img3,
  },
];
