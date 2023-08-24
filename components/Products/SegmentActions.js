import { HStack, Button, Box } from "@chakra-ui/react";
import ComponentLayout from "../Shared/Layout/ComponentLayout";
function SegmentActions() {
  const dummyControls = Array.from({
    length: 4,
  });
  return (
    <Box bgColor='red'>
      <ComponentLayout></ComponentLayout>
    </Box>
  );
}

export default SegmentActions;
