import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import Layout from "../Shared/Layout/Layout";
function HomeSegment({ variant }) {
  const align = {
    text: variant === 1 ? "right" : "left",
    flex: variant === 1 ? "end" : "start",
  };
  return (
    <Box pb='48px' pt='24px' bgColor={variant === 1 ? "red.100" : "blue.100"}>
      <Layout>
        <VStack
          textAlign={align.text}
          px='16px'
          justify={align.flex}
          align='normal'
        >
          <Heading letterSpacing='tight' fontSize='32px'>
            MAIN TITLED DESCRIPTION
          </Heading>
          <Text lineHeight={1.4}>
            Lorem ipsum dolor sit amet <br />
            Lorem ipsum dolor sit amet dolor sit amet <br />
            Lorem ipsum dolor sit amet Lorem ipsum <br />
          </Text>
        </VStack>
      </Layout>
    </Box>
  );
}

export default HomeSegment;
