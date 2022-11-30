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
import { Center, Square, Circle } from '@chakra-ui/react'

export const Certifications = () => {
  return (
    <Stack
      id="certifications"
      minH={"1vh"}
      w={"full"}
      align={"center"}
      justify={"center"}
	  textAlign={'center'}
	  bg="black"
	  color="white"
      direction={"column"}
      p={{
        base: 8,
        md: 16,
      }}
    >
      <Box w={"full"}>
		<Heading as={"h2"} fontSize={"3xl"} alignContent={'center'} alignItems={'center'} justify-content={'center'}>
		  Professional Certifications
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
          {me.certifications.map((certification, index) => (
            <SingleCertification {...certification} key={certification.name} index={index} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

const SingleCertification = ({
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

export default Certifications;
