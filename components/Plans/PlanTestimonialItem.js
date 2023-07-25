import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
function PlanTestimonialItem({ testi }) {
  return (
    <Box w='600px' mx='40px'>
      <Box w='100%' h='240px' bgColor='blue.100' />
      <HStack my='32px' gap='24px'>
        <Avatar />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam
          vitae commodi nemo velit cumque similique blanditiis officia animi
          laudantium quasi, maxime reprehenderit consectetur.
        </Text>
      </HStack>
    </Box>
  );
}

export default PlanTestimonialItem;
