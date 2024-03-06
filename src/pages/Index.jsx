import React from "react";
import { Box, Center, Container, Heading, Text, VStack, Image, Link, Button, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} padding={10}>
        <Box>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1580129958560-c5e47d47a677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHZW9yZ2UlMjBXJTIwQnVzaCUyMHBvcnRyYWl0fGVufDB8fHx8MTcwOTcxNzYwMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="George W Bush Portrait" marginBottom={4} />
          <Heading as="h1" size="xl">
            George W Bush
          </Heading>
          <Text fontSize="lg" color="gray.500">
            43rd President of the United States
          </Text>
        </Box>

        <Box textAlign="center">
          <Text fontSize="lg">Welcome to my personal website. Here you can find information about my presidency, philanthropy work, and current projects. Thank you for visiting!</Text>
        </Box>

        <Flex width="100%">
          <Link href="https://twitter.com/georgewbush" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" background="transparent" color="blue.400" />
          </Link>
          <Spacer />
          <Link href="https://www.facebook.com/georgewbush" isExternal>
            <IconButton aria-label="Facebook" icon={<FaFacebookF />} size="lg" background="transparent" color="blue.600" />
          </Link>
          <Spacer />
          <Link href="https://www.instagram.com/georgewbush" isExternal>
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" background="transparent" color="pink.400" />
          </Link>
          <Spacer />
          <Link href="https://www.linkedin.com/in/georgewbush" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedinIn />} size="lg" background="transparent" color="blue.700" />
          </Link>
        </Flex>

        <Center padding={4}>
          <Button colorScheme="blue" size="lg" onClick={() => alert("Thank you for your support!")}>
            Support My Foundation
          </Button>
        </Center>
      </VStack>
    </Container>
  );
};

export default Index;
