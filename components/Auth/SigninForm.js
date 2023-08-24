import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
function SigninForm() {
  return (
    <Box border='solid 1px black' color='white' maxW='560px' mx='auto'>
      <Box bgColor='light' pb='40px'>
        <Text p='16px' fontWeight='bold' bgColor='gray'>
          SIGN IN
        </Text>
        <VStack my='40px' maxW='320px' mx='auto'>
          <Button bgColor='red.500' mb='40px' w='100%'>
            SIGN IN WITH GOOGLE
          </Button>
          <Box mb='120px' bgColor='black' w='90%' h='1.5px' />

          <VStack w='100%' gap='32px' alignItems='normal'>
            <Box>
              <Text mb='8px' color='gray' fontWeight='bold'>
                EMAIL
              </Text>
              <Input border='none' bgColor='primary' borderRadius='none' />
            </Box>
            <Box>
              <Text mb='8px' color='gray' fontWeight='bold'>
                PASSWORD
              </Text>
              <Input border='none' bgColor='primary' borderRadius='none' />
            </Box>
          </VStack>

          <HStack
            mt='32px'
            mb='48px'
            justifyContent='center'
            w='100%'
            gap='32px'
            color='action'
          >
            <Button variant='link'>Register</Button>
            <Text color='whiteAlpha.500' pointerEvents='none'>
              |
            </Text>
            <Button variant='link'>Forgot password</Button>
          </HStack>
          <Box mb='80px' bgColor='black' w='90%' h='2px' />
          <Button
            color='white'
            bgColor='action'
            borderRadius='full'
            px='48px'
            py='24px'
          >
            SIGN IN
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default SigninForm;
