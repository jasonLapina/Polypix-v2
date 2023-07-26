import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";
import ComponentLayout from "../Shared/Layout/ComponentLayout";
function HomeSegment(props) {
  const { variant, header, text } = props;
  const align = {
    text: variant === 1 ? "right" : "left",
    flex: variant === 1 ? "end" : "start",
  };
  return (
    <Box pb='160px' pt='80px' {...props}>
      <ComponentLayout>
        <VStack
          textAlign={align.text}
          px='48px'
          justify={align.flex}
          align='normal'
        >
          <Heading letterSpacing='tight' fontSize='42px' mb='16px'>
            {header}
          </Heading>
          <Text
            textAlign={align.text}
            alignSelf={align.flex}
            maxW='560px'
            lineHeight={1.4}
            fontSize='18px'
          >
            {text}
          </Text>
          <Button
            mt='16px'
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
