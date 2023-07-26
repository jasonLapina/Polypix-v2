import { Box, Image, Text } from "@chakra-ui/react";
import AssetModal from "./AssetModal";
import { useState } from "react";
function AssetItem({ asset }) {
  const [showModal, setShowModal] = useState(false);
  const { image, name } = asset.attributes;

  return (
    <>
      <AssetModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        asset={asset}
      />
      <Box onClick={() => setShowModal(true)} cursor='pointer' pos='relative'>
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
    </>
  );
}

export default AssetItem;
