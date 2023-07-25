import { Box, Button, Image } from "@chakra-ui/react";

function PackItem({ pack }) {
  const { image, link } = pack.attributes;

  return (
    <Box w='400px' mx='auto' pos='relative'>
      <Image
        w='100%'
        src={`https://api.polypixstudios.com${image.data.attributes.url}`}
      />
      <Button
        pos='absolute'
        bottom='16px'
        left='50%'
        transform='translateX(-50%)'
        as={"a"}
        target='_blank'
        rel='noopener noreferrer'
        href={link}
        opacity={0.3}
        transition='all .4s'
        _hover={{
          opacity: 1,
        }}
      >
        View
      </Button>
    </Box>
  );
}

export default PackItem;
