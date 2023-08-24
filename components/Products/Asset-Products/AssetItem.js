import { Box, Image, Text } from "@chakra-ui/react";
import AssetModal from "./AssetModal";
import { useEffect, useState } from "react";
function AssetItem({ asset }) {
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState("/logo.png");
  const { image, name } = asset.attributes;

  useEffect(() => {
    if (!image) return;
    setSrc(`https://api.polypixstudios.com${image.data[0].attributes.url}`);
  }, [image]);

  return (
    <>
      <AssetModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        asset={asset}
      />
      <Box
        borderRadius='8px'
        onClick={() => setShowModal(true)}
        cursor='pointer'
        pos='relative'
        overflow='hidden'
      >
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
          loading='lazy'
          // src={`https://api.polypixstudios.com${image.data[0].attributes.url}`}
          src={src}
          aspectRatio='1/1'
        />
      </Box>
    </>
  );
}

export default AssetItem;
