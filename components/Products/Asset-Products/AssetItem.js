import { Box, Image } from "@chakra-ui/react";
function AssetItem({ asset }) {
  const { image } = asset.attributes;
  return (
    <Box>
      <Image
        fallbackSrc='/logo.png'
        loading='lazy'
        src={`https://api.polypixstudios.com${image.data[0].attributes.url}`}
      />
    </Box>
  );
}

export default AssetItem;
