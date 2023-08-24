import { Box, Button, Heading, VStack } from "@chakra-ui/react";

function Hero() {
  return (
    <Box w='100%' h='100vh' pos='relative'>
      <Box
        as='video'
        autoPlay
        loop
        muted
        w='100%'
        h='100%'
        objectFit='cover'
        objectPosition='center'
        pos='absolute'
        zIndex={-1}
      >
        <source src='https://api.polypixstudios.com/uploads/Web_Vid_1080_P_559a594ade.mp4' />
      </Box>
      <VStack
        pos='absolute'
        top='45%'
        left='50%'
        transform='translate(-50%,-50%)'
        gap='24px'
      >
        <Heading filter='drop-shadow(0 0 4px white)' fontSize='80px'>
          Polypix Studios
        </Heading>
        <Button borderRadius='40px'>Button to page</Button>
      </VStack>
      {/* <Box p='24px' display='flex' justifyContent='end'>
        <SignupBtn />
      </Box> */}
    </Box>
  );
}

export default Hero;
