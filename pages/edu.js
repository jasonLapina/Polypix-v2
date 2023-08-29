import ComponentLayout from "@/components/Shared/Layout/ComponentLayout";
import Footer from "@/components/Shared/Layout/Footer";
import { Box, Center, Circle, HStack, Heading, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
function services() {
  const clients = Array.from({ length: 5 });
  return (
    <>
      <Box bgColor='secondary' color='white' pb='200px'>
        <Center mb='40px' h='100vh' w='100%' bgColor='secondaryDark'>
          <Heading fontSize='56px'>EDU KOLLAB</Heading>
        </Center>
        <ComponentLayout>
          <Text maxW='600px' mb='40px'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ex
            ratione repudiandae alias nostrum maxime, perferendis perspiciatis
            quo architecto. Temporibus esse eos modi porro, ipsum perspiciatis
            culpa recusandae distinctio id?
          </Text>
          <Box>
            <Center fontSize='20px' mb='40px'>
              Our Client Institutions:
            </Center>
            <Box
              my='48px'
              overflowY='hidden'
              speed={150}
              as={Marquee}
              autoFill={true}
            >
              {clients.map((item, i) => (
                <Box
                  key={i}
                  w='160px'
                  h='160px'
                  mx='54px'
                  bgColor='yellow.500'
                  borderRadius='full'
                />
              ))}
            </Box>
          </Box>
        </ComponentLayout>
      </Box>
      <Footer />
    </>
  );
}

export default services;
