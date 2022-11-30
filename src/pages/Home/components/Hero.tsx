import {
  Avatar,
  Box,
  chakra,
  Heading,
  Icon,
  shouldForwardProp,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { IconType } from "react-icons";
import { me } from "../../../me";

export const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  };

  return (
    <Stack
      id={"home"}
      w={"full"}
      h={"90vh"}
      spacing={1}
      zIndex={1}
      p={{
        base: 4,
        md: 12,
      }}
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={variants}
	  justify={"center"}
	  bg="black"
    >
      <Stack
        h={"full"}
        w={"full"}
        bg="black"
        rounded={"2xl"}
        border={"1px"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        p={{
          base: 4,
          md: 12,
        }}
        justify={"center"}
		align={"center"}
      >
        <Avatar	size={"2xl"} src={me.image} border={"2px"} />
        <Heading

		  fontWeight={"normal"}
          as={"h1"}
          size={"2xl"}
		  bgGradient={'linear(gray.300, white)'}
		  bgClip='text'
		  textAlign={'center'}
        >
          <p>Hi, my name is Christian King,</p>
		    <Box w='40px' h='5px'/>
        </Heading>	
		<Text 
		fontSize={"2xl"}
		align={"center"}
		color='white'>
			<p>I'm a full-stack developer and Computer Science student at Florida State University. 
			</p>
			<p>	I'm passionate about anything and everything tech or finance related.</p>
			</Text>
        <Box mt={8} />
        <Stack
          direction={"row"}
          spacing={0}
          wrap={"wrap"}
          rowGap={2}
          columnGap={2}
		  justify={"center"}
        >
          {me.social.map((social) => (
            <Social
              key={social.name}
              name={social.name}
              icon={social.icon}
              url={social.uri}
              hover={social.hover}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

const Social = ({
  name,
  icon,
  url,
  hover,
}: {
  name: string;
  icon: IconType;
  url: string;
  hover: {
    bg: string;
    color: string;
  };
}) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  return (
    <ChakraBox
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <Stack
        direction={"row"}
        as={"a"}
        href={url}
        target={"_blank"}
        align={"center"}
        bg={useColorModeValue("white", "gray.800")}
        px={4}
        py={1}
        rounded={"full"}
        textDecoration={"none"}
        _hover={{
          bg: hover.bg,
          color: hover.color,
        }}
      >
        <Icon as={icon} />
        <Text fontWeight={"bold"} fontSize={"lg"}>
          {name}
        </Text>
      </Stack>
    </ChakraBox>
  );
};

export default Hero;
