import Carousel from "../../Shared/UI/Carousel";
import VideoItem from "./VideoItem";
import ProductsLayout from "../ProductsLayout";
function VideoList() {
  const dummyVids = Array.from({
    length: 8,
  });
  const carouselSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
    centerPadding: "290px",
  };

  return (
    <ProductsLayout bgColor='gray' heading='Videos'>
      <Carousel propSettings={carouselSettings}>
        {dummyVids.map((_, i) => (
          <VideoItem key={i} />
        ))}
      </Carousel>
    </ProductsLayout>
  );
}

export default VideoList;
