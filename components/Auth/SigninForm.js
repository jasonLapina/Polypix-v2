import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
function SigninForm() {
  return (
    <Box maxW='720px' mx='auto'>
      <Box bgColor='blackAlpha.700' pb='40px'>
        <Text p='16px' fontWeight='bold' bgColor='gray.200'>
          SIGN IN
        </Text>
        <VStack my='40px' maxW='320px' mx='auto'>
          <Button mb='40px' w='100%'>
            SIGN IN WITH GOOGLE
          </Button>
          <Box mb='120px' bgColor='black' w='90%' h='1.5px' />

          <VStack w='100%' gap='32px'>
            <Input />
            <Input />
          </VStack>

          <HStack
            mt='32px'
            mb='48px'
            justifyContent='center'
            w='100%'
            gap='32px'
          >
            <Button variant='link'>Register</Button>
            <Text pointerEvents='none'>|</Text>
            <Button variant='link'>Forgot password</Button>
          </HStack>
          <Box mb='80px' bgColor='black' w='90%' h='2px' />
          <Button
            color='white'
            bgColor='blue.400'
            borderRadius='full'
            px='48px'
            py='16px'
          >
            SIGN IN
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default SigninForm;
