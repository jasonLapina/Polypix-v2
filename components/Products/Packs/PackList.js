import { Box, Heading } from "@chakra-ui/react";
import ComponentLayout from "../../Shared/Layout/ComponentLayout";
import PackItem from "./PackItem";
import Carousel from "../../Shared/UI/Carousel";
function PackList({ packs }) {
  const carouselSettings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    className: "center",
    centerPadding: "290px",
  };

  return (
    <Box>
      <ComponentLayout>
        <Heading textAlign='center' fontWeight='thin' mb='24px'>
          Packs
        </Heading>
        <Carousel propSettings={carouselSettings}>
          {packs.map((item) => (
            <PackItem pack={item} key={item.id} />
          ))}
        </Carousel>
      </ComponentLayout>
    </Box>
  );
}

export default PackList;