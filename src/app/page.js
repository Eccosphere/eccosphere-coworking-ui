import HomePage from "@/views/Home/HomePage";

export const metadata = {
  title: "Eccosphere | Coworking Space in Noida",
  description:
    "Welcome to Eccosphere – Noida’s most flexible coworking space for creators, startups, and professionals. Affordable coworking space and private office in Noida Sector 67.",
  keywords: "coworking, office space, Eccosphere, Noida, shared workspace",
  authors: [{ name: "Eccosphere Coworking" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.eccosphere.com/",
  },
};
export default function Home() {
  return <HomePage />;
}
