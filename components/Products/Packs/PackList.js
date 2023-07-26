import PackItem from "./PackItem";
import Carousel from "../../Shared/UI/Carousel";
import ProductsLayout from "../ProductsLayout";

function PackList({ packs }) {
  const carouselSettings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    className: "center",
    centerPadding: "290px",
  };

  return (
    <ProductsLayout heading='Packs'>
      <Carousel propSettings={carouselSettings}>
        {packs.map((item) => (
          <PackItem pack={item} key={item.id} />
        ))}
      </Carousel>
    </ProductsLayout>
  );
}

export default PackList;
