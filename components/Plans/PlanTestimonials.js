import { Box, Heading } from "@chakra-ui/react";
import PlanTestimonialItem from "./PlanTestimonialItem";
import Marquee from "react-fast-marquee";

function PlanTestimonials() {
  const dummyTesti = Array.from({
    length: 6,
  });
  return (
    <Box mt='32px'>
      <Heading mb='72px' textTransform='uppercase' textAlign='center'>
        What our members have to say
      </Heading>
      <Box as={Marquee}>
        {dummyTesti.map((_, i) => (
          <PlanTestimonialItem />
        ))}
      </Box>
    </Box>
  );
}

export default PlanTestimonials;
