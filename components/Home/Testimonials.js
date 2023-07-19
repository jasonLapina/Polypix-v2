import { Box, HStack, Heading } from "@chakra-ui/react";
import ComponentLayout from "../Shared/Layout/ComponentLayout";
import Marquee from "react-fast-marquee";

function Testimonials() {
  const dummyIcons = Array.from({ length: 8 });
  return (
    <Box py='40px'>
      <ComponentLayout>
        <Heading textTransform='uppercase'>
          The right license for your <br /> project
        </Heading>
        <Box overflowY='hidden' speed={150} as={Marquee}></Box>
      </ComponentLayout>
    </Box>
  );
}

export default Testimonials;
