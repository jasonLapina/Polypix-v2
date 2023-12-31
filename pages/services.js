import ComponentLayout from "@/components/Shared/Layout/ComponentLayout";
import Footer from "@/components/Shared/Layout/Footer";
import AltNav from "@/components/Shared/UI/AltNav";
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
  const altNavItems = [
    {
      text: "Portfolio",
      link: "/services",
    },
    {
      text: "Demo Reel",
      link: "/services",
    },
  ];
  return (
    <>
      <Box bgColor='secondary' color='white' pb='80px'>
        <Center mb='40px' h='100vh' w='100%' bgColor='secondaryDark'>
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
      <AltNav items={altNavItems} />
      <Footer />
    </>
  );
}

export default services;
