import BlogPage from "@/views/Blog/BlogPage";
import React from "react";

export const metadata = {
  title: "Blog | Eccosphere Coworking Insights",
  description:
    "Explore coworking tips, productivity hacks, workspace trends, and updates from Eccosphere Coworking.",
  keywords:
    "coworking blog, office tips, productivity, startup workspace, Eccosphere blog",
  authors: [{ name: "Eccosphere Coworking" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.eccosphere.com/blog",
  },
};

const Blog = () => {
  return <BlogPage />;
};

export default Blog;
