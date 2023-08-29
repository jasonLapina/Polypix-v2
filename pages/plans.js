import PlanList from "@/components/Plans/PlanList";
import PlanTestimonials from "@/components/Plans/PlanTestimonials";
import PlansHero from "@/components/Plans/PlansHero";
import ComponentLayout from "@/components/Shared/Layout/ComponentLayout";
import Footer from "@/components/Shared/Layout/Footer";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";

function plans() {
  return (
    <>
      <Box bgColor='secondary' color='white' pb='40dvh'>
        <PlansHero />
        <PlanList />
        <PlanTestimonials />
        <ComponentLayout>
          <Box mt='120px' mb='40px' textTransform='uppercase'>
            <Heading mb='24px' textAlign='center'>
              boost charge your worlds today
            </Heading>
            <HStack justify='center' gap='24px'>
              <Button bgColor='action' color='white' borderRadius='20px'>
                Create a free account
              </Button>
              <Button
                borderWidth='3px'
                borderRadius='20px'
                variant='outline'
                borderColor='action'
                color='action'
              >
                Get premium access
              </Button>
            </HStack>
          </Box>
        </ComponentLayout>
      </Box>
      <Footer />
    </>
  );
}

export default plans;
