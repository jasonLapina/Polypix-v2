import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";
import ComponentLayout from "../Shared/Layout/ComponentLayout";
function HomeSegment({ variant }) {
  const align = {
    text: variant === 1 ? "right" : "left",
    flex: variant === 1 ? "end" : "start",
  };
  return (
    <Box pb='160px' pt='80px' bgColor={variant === 1 ? "red.100" : "blue.100"}>
      <ComponentLayout>
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
          <Button
            mt='8px'
            w='fit-content'
            letterSpacing='tight'
            borderRadius='none'
            alignSelf={align.flex}
          >
            BUTTON TO CERTAIN SEGMENT
          </Button>
        </VStack>
      </ComponentLayout>
    </Box>
  );
}

export default HomeSegment;
