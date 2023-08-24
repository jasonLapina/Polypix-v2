import ActionBar from "@/components/Products/Action-Bar/ActionBar";
import AssetList from "@/components/Products/Asset-Products/AssetList";
import PackList from "@/components/Products/Packs/PackList";
import VideoList from "@/components/Products/Videos/VideoList";
import Footer from "@/components/Shared/Layout/Footer";
import axiosInstance from "@/components/Shared/axiosInstance";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";

// "/props?populate=image,links,fileFormats"

export default function Products({ packs, assets }) {
  return (
    <>
      <Box>
        <Center h='50vh' w='100%' bgColor='red.100'>
          <Heading>
            HEADER PHOTO <br />
            CLICKABLE REPLACEABLE LINK
          </Heading>
        </Center>
        <ActionBar />
        <VStack my='48px' gap='80px' align='normal'>
          <VideoList />
          <PackList packs={packs.data} />
          <AssetList assets={assets.data} />
        </VStack>
      </Box>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const packReq = axiosInstance.get("/packs/?populate=image");
  const assetsReq = axiosInstance.get(
    "/props?populate=image,links,fileFormats"
  );

  const res = await Promise.all([packReq, assetsReq]);

  return {
    props: {
      packs: res[0].data,
      assets: res[1].data,
    },
  };
}
