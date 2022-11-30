import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export const Contact = () => {
  return (
    <Container bg="black" color="white" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
		  
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Box py={{ base: 2, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={1} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +1 727-457-8821
                      </Button>
                      <Button
                        size="lg"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        crk21c@fsu.edu
                      </Button>
                      <Button
                        size="lg"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1"	 size="20px" />}>
                        Saint Petersburg, FL
                      </Button>
					  <Box h={10}/>
					  <Text align={"center"} pl={'10%'}> <p> Made by Christian King </p>
					  <p> © 2022 </p> </Text>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={2}
                    alignItems="flex-start">
                  </HStack>
                </Box>
              </WrapItem>	
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default Contact;
