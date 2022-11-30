import { Box, useColorModeValue } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Loader } from "../loading/Loader";

// Lazy Import
const Navbar = lazy(() => import("../common/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Education = lazy(() => import("./components/Education"));
const Courses = lazy (() => import("./components/Courses"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));
const Spacer = lazy(() => import("./components/Spacer"));

export const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Box scrollBehavior={"smooth"}>
        <Hero />
		<Navbar />
		<Experience />
		<Spacer />
		<Projects />
		<Spacer />
        <Education />
		<Courses />
        <Skills />
		<Certifications />
        <Contact />
      </Box>
    </Suspense>
  );
};
