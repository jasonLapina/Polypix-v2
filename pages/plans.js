import PlanList from "@/components/Plans/PlanList";
import PlanTestimonials from "@/components/Plans/PlanTestimonials";
import PlansHero from "@/components/Plans/PlansHero";
import ComponentLayout from "@/components/Shared/Layout/ComponentLayout";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";

function plans() {
  return (
    <>
      <PlansHero />
      <PlanList />
      <PlanTestimonials />
      <ComponentLayout>
        <Box mb='40px' textTransform='uppercase'>
          <Heading mb='24px' textAlign='center'>
            boost charge your worlds today
          </Heading>
          <HStack bgColor='red' justify='center' gap='24px'>
            <Button>Create a free account</Button>
            <Button variant='outline'>Get premium access</Button>
          </HStack>
        </Box>
      </ComponentLayout>
    </>
  );
}

export default plans;
