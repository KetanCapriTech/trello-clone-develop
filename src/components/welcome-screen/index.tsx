import React from 'react';
import NavBar from '@/src/components/navbar';
import { Box, Image, Flex, Text } from '@chakra-ui/react';

const WelcomeScreen = (): JSX.Element => {
  return (
    <>
      <Box bgGradient="linear(darkblue, white)" height="100vh">
        <NavBar />
        <Flex
          alignItems="center"
          flexDirection={['column', 'column', 'row', 'row']}
          justifyContent="center"
          p="4rem">
          <Box>
            <Text fontSize={['40px', '40px', '50px', '50px']} fontWeight="bold" lineHeight="50px">
              Our System will increase your Pro-ductivity
            </Text>
            <Text
              fontSize={['1rem', '1rem', '1.5rem', '1.5rem']}
              width={['100%', '100%', '50%', '50%']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas eligendi
              necessitatibus iusto eius asperiores laboriosam? Labore vitae laboriosam voluptate
              reiciendis nostrum voluptatum minus reprehenderit facere, dolorum veniam corporis
              recusandae.
            </Text>
          </Box>
          <Box>
            <Image
              height={['200px', '300px', '400px', '500px']}
              src="/homepage/home-illustration.svg"
              alt="brand logo"></Image>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default WelcomeScreen;
