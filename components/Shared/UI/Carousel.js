import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

function Carousel(props) {
  const { children, propSettings } = props;

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    ...propSettings,
  };

  return (
    <Box as={Slider} {...settings} {...props}>
      {children}
    </Box>
  );
}

export default Carousel;
