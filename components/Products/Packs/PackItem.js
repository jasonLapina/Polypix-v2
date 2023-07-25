import { Box, Image } from "@chakra-ui/react";
import Carousel from "../../Shared/UI/Carousel";
function PackItem({ pack }) {
  const { image } = pack.attributes;

  return (
    <Box w='400px' mx='auto'>
      <Image
        w='100%'
        src={`https://api.polypixstudios.com${image.data.attributes.url}`}
      />
    </Box>
  );
}

export default PackItem;
