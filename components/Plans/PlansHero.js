import { Box, Button, Heading, VStack } from "@chakra-ui/react";
function PlansHero() {
  return (
    <Box>
      <Box pos='relative' w='100%' h='100vh' bgColor='red.100'>
        <VStack h='100%' justifyContent='center'>
          <Heading textAlign='center' textTransform='uppercase' fontSize='48px'>
            Get your creative <br />
            access to limitless art
          </Heading>
          <Button
            bgColor='skyblue'
            color='white'
            px='24px'
            textTransform='uppercase'
            borderRadius='40px'
            mt='64px'
          >
            Begin your plan
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default PlansHero;
