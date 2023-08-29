import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "@/components/Shared/Layout/Navbar";
import "../components/Shared/UI/Carousel.css";

export const theme = extendTheme({
  colors: {
    primary: "#000000",
    secondary: "#1d1d1dff",
    secondaryLight: "#2f2f2f",
    secondaryDark: "#1a1a1a",
    action: "#2a98f1",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
