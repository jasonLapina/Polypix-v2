import { HStack, Button, Box } from "@chakra-ui/react";
import ComponentLayout from "../Shared/Layout/ComponentLayout";
function SegmentActions() {
  const dummyControls = Array.from({
    length: 4,
  });
  return (
    <Box bgColor='red'>
      <ComponentLayout>
        <HStack py='8px' my='24px' justify='space-around'>
          {dummyControls.map((_, i) => (
            <HStack p='8px' bgColor='yellow.300' key={i}>
              <Box w='100px' h='40px' bgColor='black' />
              <Button>Button</Button>
            </HStack>
          ))}
        </HStack>
      </ComponentLayout>
    </Box>
  );
}

export default SegmentActions;
