import {
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { IconType } from "react-icons";
import { useInView } from "react-intersection-observer";
import { me } from "../../../me";

export const Courses = () => {
  return (
    <Stack
      id="courses"
      minH={"1vh"}
      w={"full"}
      justify={"center"}
      direction={"column"}
      textAlign={'center'}
      align={'center'}
	  bg="black"
	  color="white"
      p={{
        base: 8,
        md: 16,
      }}
    >
      <Box w={"full"}>
        <Heading as={"h2"} fontSize={"3xl"}  alignContent={'center'} alignItems={'center'} justify-content={'center'}>
		  Notable Completed Courses
        </Heading>
        <Stack
          direction={"row"}
          spacing={0}
          rowGap={2}
          mt={8}
          wrap={"wrap"}
          columnGap={2}
		   align={"center"} 
		   justify={"center"}
        >
          {me.courses.map((course, index) => (
            <SingleCourse {...course} key={course.name} index={index} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

const SingleCourse = ({
  name,
  icon,
  index = 0,
}: {
  name: string;
  icon?: IconType;
  index?: number;
}) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, x: 20, transition: { duration: 0.5 } },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: index * 0.05 },
    },
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
      <Stack
        direction={"row"}
        align={"center"}
        bg="black"
		color="white"
		borderRadius={"2xl"}
		border={"2px"}
        px={2}
        py={1}
      >
        {icon && <Icon as={icon} />}
        <Heading as={"h3"} fontSize={"2xl"}>
          {name}
        </Heading>
      </Stack>
    </motion.div>
  );
};

export default Courses;
