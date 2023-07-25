import { Box, Heading } from "@chakra-ui/react";
import PlanTestimonialItem from "./PlanTestimonialItem";

function PlanTestimonials() {
  return (
    <Box>
      <Heading mb='72px' textTransform='uppercase' textAlign='center'>
        What our members have to say
      </Heading>
      <PlanTestimonialItem />
    </Box>
  );
}

export default PlanTestimonials;
