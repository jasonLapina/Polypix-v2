import { Box, Button, HStack, Heading, VStack } from "@chakra-ui/react";
import SignupBtn from "../Shared/UI/SignupBtn";
import Link from "next/link";
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
        <source src='https://api.polypixstudios.com/uploads/banner_video_0d8b8948c4.mp4' />
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
        <HStack>
          <Button as={Link} href='/plans'>
            plans
          </Button>
          <Button as={Link} href='/products'>
            prods
          </Button>
        </HStack>
      </VStack>
      <Box p='24px' display='flex' justifyContent='end'>
        <SignupBtn />
      </Box>
    </Box>
  );
}

export default Hero;
