import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { me } from "../../../me";
import { FiExternalLink } from "react-icons/fi";
import { useEffect, useState } from "react";

export const Projects = () => {
  const [projects, setProjects] = useState(me.projects.slice(0, 3));
  const [showCount, setShowCount] = useState(4);
  const [showMore, setShowMore] = useState(true);
  const handleShowMore = () => {
    setShowCount((prev) => prev + 4);

    if (showCount >= me.projects.length - 1) {
      setShowMore(false);
    }
  };

  useEffect(() => {
    setProjects(me.projects.slice(0, showCount));
  }, [showCount]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  };

  return (
	<Stack
      id={"projects"}
      w={"full"}
      h={"115vh"}
	  bg="black"
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
    >
      <Box w={"full"} textAlign={'center'}>
        <Heading as={"h2"} fontSize={"4xl"} color="white" >
          Projects
        </Heading>
        <Grid
          mt={4}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: me.projects.length > 2 ? "repeat(2, 1fr)" : "repeat(1, 1fr)",
          }}
          gap={6}
        >
          {projects.map((project, i) => (
            <GridItem key={`project-${i}`}>
              <SingleProject {...project} />
            </GridItem>
          ))}
          <GridItem
            colSpan={{
              base: 1,
              md: me.projects.length > 2 ? 2 : 1,
            }}
          >
          </GridItem>
        </Grid>
      </Box>
    </Stack>
  );
};

const SingleProject = ({
  name,
  description,
  contribution,
  technologies,
  links,
  image,
}: {
  name: string;
  description: string;
  contribution: string;
  technologies: readonly string[];
  links: readonly {
    name: string;
    uri: string;
  }[];
  image: string;
}) => {
  return (
    <Stack
      direction={"column"}
      w={"full"}
      h={"full"}
	  color="white"
      bg="black"
      p={6}
      borderRadius={"2xl"}
      border={"1px"}
      borderColor="white"
      as={motion.div}
      justify={"center"}
      whileHover={{
        borderWidth: "2px",
        transition: {
          duration: 0.2,
        },
      }}
      whileTap={{
        scale: 0.99,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Flex align={"center"}  textAlign={'center'} justify={"center"} >
        <Heading
          fontSize={"2xl"}
          color="white"
		  textAlign={'center'}
        >
          {name}
        </Heading>
      </Flex>
      <Stack direction={"row"} justify={"center"} textAlign={'center'} spacing={2} mt={8}>
        {links.map((link) => (
          <OutLink href={link.uri} key={link.name}>
            {link.name}
          </OutLink>
        ))}
      </Stack>
      <Text>{description}</Text>
      <Box h={1} />
      <Stack direction={"row"} wrap={"wrap"}  textAlign={'center'} justify={"center"} align={"center"} rowGap={3}>
        {technologies.map((technology) => (
          <Box mx={1}>
            <Pill key={technology}>{technology}</Pill>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

const Pill = ({ children }: { children: string }) => {
  return (
    <Box
      bg={"white"}
      color={"black"}
      px={2}
      py={0.5}
      borderRadius={"2xl"}
      fontSize={"sm"}
      fontWeight={"bold"}
    >
      {children}
    </Box>
  );
};

const OutLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <Flex
      as={"a"}
      href={href}
      target={"_blank"}
      rel={"noreferrer"}
      align={"center"}
      color={"blue.500"}
    >
      {children}&nbsp;
      <Icon as={FiExternalLink} />
    </Flex>
  );
};

export default Projects;
