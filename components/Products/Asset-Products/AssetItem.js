import { Box, Image, Text } from "@chakra-ui/react";
function AssetItem({ asset }) {
  const { image, name } = asset.attributes;
  return (
    <Box pos='relative'>
      <Text
        px='8px'
        py='4px'
        pos='absolute'
        bottom='8px'
        left='16px'
        fontSize='22px'
        color='white'
        filter='drop-shadow(0 0 4px black)'
      >
        {name}
      </Text>
      <Image
        fallbackSrc='/logo.png'
        loading='lazy'
        src={`https://api.polypixstudios.com${image.data[0].attributes.url}`}
      />
    </Box>
  );
}

export default AssetItem;
