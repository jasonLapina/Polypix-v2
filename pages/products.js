import AssetList from "@/components/Products/AssetList";
import AssetPackList from "@/components/Products/AssetPackList";
import VideoList from "@/components/Products/VideoList";
import { Box, VStack } from "@chakra-ui/react";

// "/props?populate=image,links,fileFormats"
export default function Products() {
  return (
    <Box>
      <Box h='320px' w='100%' bgColor='red.100' />
      <VStack align='normal'>
        <VideoList />
        <AssetPackList />
        <AssetList />
      </VStack>
    </Box>
  );
}
