import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { me } from "../../../me";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const Education = () => {
  return (
    <Stack
      id={"education"}
      minH={"50vh"}
      w={"full"}
      align={"center"}
      justify={"center"}
      direction={"column"}
	  color="white"
	  bg="black"
      p={{
        base: 8,
        md: 16,
      }}
    >
      
        <Heading as={"h2"} fontSize={"4xl"}>
          Education
        </Heading>
        <Stack direction={"column"} spacing={4} mt={8} align={"center"} justify={"center"}>
          {me.education.map((education) => (
            <SingleEducation key={education.school} {...education} />
          ))}
        </Stack>
    </Stack>
  );
};

const SingleEducation = ({
  degree,
  major,
  school,
  graduation,
}: {
  degree: string;
  major: string;
  school: string;
  graduation: string;
}) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 1 } },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <Stack direction={"column"} textAlign={'center'}>
        <Heading fontSize={"2xl"} alignContent={'center'} alignItems={'center'} justify-content={'center'}>
		  {school}
        </Heading>
        <Heading as={"h4"} fontSize={"xl"} fontWeight={"normal"} alignContent={'center'} alignItems={'center'} justify-content={'center'}>
		{major}
        </Heading>
        <Heading as={"h5"} fontSize={"x1"} fontWeight={"normal"} alignContent={'center'} alignItems={'center'} justify-content={'center'}>
		  {graduation}
        </Heading>
		<Box maxW="full" />
        ))
      </Stack>
    </motion.div>
  );
};

export default Education;
