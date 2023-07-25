import AssetList from "@/components/Products/AssetList";
import PackList from "@/components/Products/Packs/PackList";
import VideoList from "@/components/Products/VideoList";
import axiosInstance from "@/components/Shared/axiosInstance";
import { Box, VStack } from "@chakra-ui/react";

// "/props?populate=image,links,fileFormats"
export default function Products({ packs }) {
  return (
    <Box>
      <Box h='320px' w='100%' bgColor='red.100' />
      <VStack align='normal'>
        <VideoList />
        <PackList packs={packs.data} />
        <AssetList />
      </VStack>
    </Box>
  );
}

export async function getStaticProps() {
  const packReq = axiosInstance.get("/packs/?populate=image");

  const res = await Promise.all([packReq]);

  return {
    props: {
      packs: res[0].data,
    },
  };
}
