import ComponentLayout from "@/components/Shared/Layout/ComponentLayout";
import Footer from "@/components/Shared/Layout/Footer";
import { Box, Center, Circle, HStack, Heading, Text } from "@chakra-ui/react";
function services() {
  const clients = Array.from({ length: 5 });
  return (
    <>
      <Box pb='200px'>
        <Center mb='40px' h='100vh' w='100%' bgColor='red.100'>
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
            <HStack justify='center' gap='120px'>
              {clients.map((client) => (
                <Circle size='80px' bgColor='red' />
              ))}
            </HStack>
          </Box>
        </ComponentLayout>
      </Box>
      <Footer />
    </>
  );
}

export default services;
