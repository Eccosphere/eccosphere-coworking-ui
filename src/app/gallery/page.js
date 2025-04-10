import GalleryPage from "@/views/Gallery/GalleryPage";
import React from "react";

export const metadata = {
  title: "Gallery | Eccosphere Office Space",
  description:
    "Check out our modern coworking space with open desks, private cabins, and conference rooms.",
  keywords: "eccosphere gallery, coworking images, office photos",
  authors: [{ name: "Eccosphere Coworking" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.eccosphere.com/gallery",
  },
};

const Gallery = () => {
  return <GalleryPage />;
};

export default Gallery;
