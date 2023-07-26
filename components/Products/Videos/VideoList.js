import { Box, Heading } from "@chakra-ui/react";
import ComponentLayout from "../../Shared/Layout/ComponentLayout";
import Carousel from "../../Shared/UI/Carousel";
import VideoItem from "./VideoItem";
function VideoList() {
  const dummyVids = Array.from({
    length: 8,
  });
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
          Videos
        </Heading>
        <Carousel propSettings={carouselSettings}>
          {dummyVids.map((_, i) => (
            <VideoItem key={i} />
          ))}
        </Carousel>
      </ComponentLayout>
    </Box>
  );
}

export default VideoList;
