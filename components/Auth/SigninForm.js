import {
  Box,
  Button,
  Grid,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineGoogle } from "react-icons/ai";
function SigninForm() {
  return (
    <Box
      border='1px RGBA(255, 255, 255, 0.04) solid'
      boxShadow='2px 4px 4px black'
      color='white'
      maxW='560px'
      mx='auto'
    >
      <Box bgColor='secondaryDark' pb='40px'>
        <Text p='16px' fontWeight='bold' bgColor='secondaryLight'>
          SIGN IN
        </Text>
        <VStack my='40px' maxW='320px' mx='auto'>
          <Button
            py='24px'
            color='white'
            bgColor='secondaryLight'
            mb='40px'
            w='100%'
          >
            <Icon fontSize='32px' as={AiOutlineGoogle} />
            <Text ml='8px'>SIGN IN WITH GOOGLE</Text>
          </Button>
          <Box mb='120px' bgColor='black' w='90%' h='1.5px' />

          <VStack w='100%' gap='32px' alignItems='normal'>
            <Box>
              <Text
                mb='8px'
                color='gray'
                letterSpacing='tighter'
                fontWeight='bold'
              >
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
