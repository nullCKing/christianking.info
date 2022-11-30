import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { me } from "../../../me";

export const Spacer = () => {
	const is_mobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/BlackBerry/i);
	if (is_mobile != null){
	  return (

		  <Flex
			id="spacer"
			bgGradient='linear(black, blackAlpha.700, blackAlpha.500, blackAlpha.700, black)'
			color="black"
			h={500}
			maxH={"25%"}
			w={"full"}
			align={"center"}
			justify={"center"}
		  >
		  </Flex>
	  );
	}
	else 
	{
		return (<Box h={1} w="100%" bg="black"/>)
	}
};

export default Spacer;
