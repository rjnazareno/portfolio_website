import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import AllWorks from "../../components/sections/AllWorks";
import Contact from "../../components/sections/Contact";
import ScrollProgress from "../../components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: "All Work | Resty James Nazareno",
  description:
    "A complete project showcase for Resty James M. Nazareno, featuring full-stack web and mobile application work.",
};

export default function WorkPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <AllWorks />
        <Contact />
      </main>
    </>
  );
}
