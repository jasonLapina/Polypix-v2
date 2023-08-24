import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "@/components/Shared/Layout/Navbar";
import "../components/Shared/UI/Carousel.css";

export const theme = extendTheme({
  colors: {
    primary: "#0f0e0e",
    dark: "#070707",
    gray: "#99999d",
    light: "#272626",
    action: "#004e98",
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
