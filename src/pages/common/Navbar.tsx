import {
  Avatar,
  Box,
  Container,
  Flex,
  IconButton,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaStream } from "react-icons/fa";
import { Link } from "react-scroll";
import { me } from "../../me";
import { motion } from "framer-motion";

export const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
	<Stack minH={"10vh"} align={"center"} justify={"center"} bg="black">
		<Container maxW={"75%"}>
          <Flex justify={"space-between"}>
            {isMobile ? (
              <Box h={'10%'}/>
            ) : (
               <Box h={'10%'}/>
            )}
          </Flex>
        </Container>
      </Stack>
      <BottomSheet isOpen={isOpen} onClose={onClose} />
    </>
  );
};

const DesktopOptions = () => {
  return (
	<Stack direction={"row"} spacing={4} align={"flex-start"}>
      {options.map((option) => (
        <Flex
          align={"flex-start"}
          key={option.name}
          as={Link}
          to={option.href}
          smooth={true}
          cursor={"pointer"}
		  borderWidth = {'2px'}
		  borderColor = "white"
          bg="black"
          px={8}
          py={2}
          rounded={"md"}
          _hover={{
            bg: "white",
          }}
          transition={"all 0.2s ease-in-out"}
        >
          <Text
            fontWeight={"bold"}
            color="white"
          >
            {option.name}
          </Text>
        </Flex>
      ))}
    </Stack>
  );
};

const BottomSheet = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0, zIndex: -1 }}
      animate={{
        height: isOpen ? 500 : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ }}
    >
      <Stack p={8} divider={<StackDivider />} spacing={4} zIndex={-1}>
        {options.map((option) => (
          <Box
            w={"full"}
            key={option.name}
            h={"full"}
            as={Link}
            to={isOpen ? option.href : ""}
            offset={-500}
            smooth={true}
            cursor={isOpen ? "pointer" : "default"}
            onClick={onClose}
          >
            {option.name}
          </Box>
        ))}
      </Stack>
    </motion.div>
  );
};

const options = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "Experience",
    href: "experience",
  },
  {
    name: "Projects",
    href: "projects",
  },
  {
    name: "Education",
    href: "education",
  },
  {
    name: "Courses",
    href: "courses",
  },
  {
    name: "Skills",
    href: "skills",
  },
  {
	name: "Certifications",
	href: "certifications"
  },
  {
    name: "Contact",
    href: "contact",
  },
];

export default Navbar;
