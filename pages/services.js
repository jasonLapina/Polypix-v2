import ComponentLayout from "@/components/Shared/Layout/ComponentLayout";
import Footer from "@/components/Shared/Layout/Footer";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
function services() {
  const offers = [
    "3D Art",
    "Props",
    "Environments",
    "Hardsurface",
    "Textures",
    "Animation Clean Up",
  ];
  return (
    <>
      <Box bgColor='dark' color='white' pb='80px'>
        <Center mb='40px' h='100vh' w='100%' bgColor='light'>
          <Heading fontSize='56px'>SERVICES</Heading>
        </Center>

        <ComponentLayout>
          <Text maxW='600px' mb='32px'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ex
            ratione repudiandae alias nostrum maxime, perferendis perspiciatis
            quo architecto. Temporibus esse eos modi porro, ipsum perspiciatis
            culpa recusandae distinctio id?
          </Text>
          <Text>What We Do</Text>
          {offers.map((item) => (
            <Text key={item}>{item}</Text>
          ))}
        </ComponentLayout>
      </Box>
      <Footer />
    </>
  );
}

export default services;
