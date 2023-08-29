import PackItem from "./PackItem";
import Carousel from "../../Shared/UI/Carousel";
import ProductsLayout from "../ProductsLayout";
import SegmentActions from "../SegmentActions";
import { Box } from "@chakra-ui/react";

function PackList({ packs }) {
  const dummyControls = Array.from({
    length: 4,
  });

  const carouselSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
    centerPadding: "290px",
  };

  return (
    <Box>
      <ProductsLayout heading='Packs'>
        <Carousel propSettings={carouselSettings}>
          {packs.map((item) => (
            <PackItem pack={item} key={item.id} />
          ))}
        </Carousel>
      </ProductsLayout>
      <SegmentActions />
    </Box>
  );
}

export default PackList;
