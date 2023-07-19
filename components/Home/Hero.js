import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import SignupBtn from "../Shared/UI/SignupBtn";
function Hero() {
  return (
    <Box w='100%' h='1080px' pos='relative'>
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
        <source src='https://api.polypixstudios.com/uploads/banner_video_0d8b8948c4.mp4' />
      </Box>
      <VStack
        pos='absolute'
        top='40%'
        left='50%'
        transform='translate(-50%,-50%)'
        gap='24px'
      >
        <Heading filter='drop-shadow(0 0 8px white)' fontSize='80px'>
          Polypix Studios
        </Heading>
        <Button>BUTTON TO PAGE</Button>
      </VStack>
      <Box p='24px' display='flex' justifyContent='end'>
        <SignupBtn />
      </Box>
    </Box>
  );
}

export default Hero;
