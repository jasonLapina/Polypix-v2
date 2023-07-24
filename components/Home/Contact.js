import { Box, Heading, Input, VStack, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import ComponentLayout from "../Shared/Layout/ComponentLayout";

const inputs = [
  {
    type: "Email",
  },
  {
    type: "Message",
  },
];

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMesage] = useState("");

  return (
    <Box my='40px'>
      <ComponentLayout>
        <Heading textTransform='uppercase'>Contact us</Heading>
        <VStack gap='48px' maxW='768px' my='40px' align='normal'>
          <Box pos='relative'>
            <Text
              transform={
                email.trim().length !== 0
                  ? "translateY(-26px)"
                  : "translateY(0px)"
              }
              ml='16px'
              pos='absolute'
              transition='all .4s'
              opacity={email.trim().length !== 0 ? 1 : 0}
            >
              Email
            </Text>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              type='email'
            />
          </Box>
          <Box pos='relative'>
            <Text
              transform={
                message.trim().length !== 0
                  ? "translateY(-26px)"
                  : "translateY(8px)"
              }
              ml='16px'
              pos='absolute'
              transition='all .4s'
              opacity={message.trim().length !== 0 ? 1 : 0}
            >
              Message
            </Text>
            <Textarea
              value={message}
              onChange={(e) => setMesage(e.target.value)}
              placeholder='Message'
              type='text'
            />
          </Box>
        </VStack>
      </ComponentLayout>
    </Box>
  );
}

export default Contact;
