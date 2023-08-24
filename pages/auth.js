import SigninForm from "@/components/Auth/SigninForm";
import ComponentLayout from "@/components/Shared/Layout/ComponentLayout";
import Footer from "@/components/Shared/Layout/Footer";
import { Box, Heading } from "@chakra-ui/react";
function auth() {
  return (
    <>
      <Box py='120px' bgColor='blackAlpha.600'>
        <ComponentLayout>
          <SigninForm />
        </ComponentLayout>
      </Box>
      <Footer />
    </>
  );
}

export default auth;
