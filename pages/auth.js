import SigninForm from "@/components/Auth/SigninForm";
import ComponentLayout from "@/components/Shared/Layout/ComponentLayout";
import Footer from "@/components/Shared/Layout/Footer";
import AltNav from "@/components/Shared/UI/AltNav";
import { Box } from "@chakra-ui/react";
function auth() {
  const altNavItems = [
    {
      text: "Services",
      link: "/services",
    },
    {
      text: "Edu Collab",
      link: "/services",
    },
    {
      text: "Products",
      link: "/services",
    },
  ];
  return (
    <>
      <Box bgColor='secondary' py='120px'>
        <ComponentLayout>
          <SigninForm />
        </ComponentLayout>
      </Box>
      <AltNav items={altNavItems} />
      <Footer />
    </>
  );
}

export default auth;
