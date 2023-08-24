import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import ComponentLayout from "../Shared/Layout/ComponentLayout";
import Marquee from "react-fast-marquee";

function Testimonials() {
  const dummyIcons = Array.from({ length: 8 });
  const dummyTestimonials = Array.from({ length: 3 });
  return (
    <Box color='white' py='40px' bgColor='dark' pb='120px'>
      <ComponentLayout>
        <Heading textTransform='uppercase'>
          The right license for <br /> your project
        </Heading>
        {/* RENDER LOGOS */}
        <Box
          my='48px'
          overflowY='hidden'
          speed={150}
          as={Marquee}
          autoFill={true}
        >
          {dummyIcons.map((item, i) => (
            <Box
              key={i}
              w='160px'
              h='160px'
              mx='54px'
              bgColor='green.100'
              borderRadius='full'
            />
          ))}
        </Box>
        {/* RENDER TESTIMONIALS */}
        <HStack my='120px' gap='40px' justify='center'>
          {dummyTestimonials.map((item, i) => {
            return (
              <Box px='24px' textAlign='right' key={i}>
                <Box fontSize='18px'>
                  <Text>Lorem ipsum dolor, tem explicabo! tem explicabo!</Text>
                  <Text>Lorem ipsum dolor, tem explicabo! tem explicabo!</Text>
                </Box>
                <Box mt='16px'>
                  <Text fontSize='24px'>Johnny Boy</Text>
                  <Text fontSize='14px'>Sr. Lecturer</Text>
                </Box>
                <Text as='address' mt='8px'>
                  address, address, address
                </Text>
              </Box>
            );
          })}
        </HStack>
        {/* RENDER NON-MARQUEE LOGOS */}
        <HStack justify='space-around'>
          {dummyIcons.map((item, i) => (
            <Box key={i} w='80px' h='80px' bgColor='green.100' />
          ))}
        </HStack>
      </ComponentLayout>
    </Box>
  );
}

export default Testimonials;
