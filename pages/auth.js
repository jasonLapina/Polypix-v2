import SigninForm from "@/components/Auth/SigninForm";
import ComponentLayout from "@/components/Shared/Layout/ComponentLayout";
import Footer from "@/components/Shared/Layout/Footer";
import AltNav from "@/components/Shared/UI/AltNav";
import { Box, Heading } from "@chakra-ui/react";
function auth() {
  return (
    <>
      <Box bgColor='secondary' py='120px'>
        <ComponentLayout>
          <SigninForm />
        </ComponentLayout>
      </Box>
      <AltNav />
      <Footer />
    </>
  );
}

export default auth;
