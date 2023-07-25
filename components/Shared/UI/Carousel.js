import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

function Carousel(props) {
  const { children, propSettings } = props;

  const settings = {
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...propSettings,
  };

  return (
    <Box as={Slider} {...settings} {...props}>
      {children}
    </Box>
  );
}

export default Carousel;
