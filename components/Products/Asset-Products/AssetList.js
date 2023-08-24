import { Box, Grid } from "@chakra-ui/react";
import AssetItem from "./AssetItem";
import ProductsLayout from "../ProductsLayout";
import SegmentActions from "../SegmentActions";

function AssetList({ assets }) {
  return (
    <Box bgColor='green.100'>
      <ProductsLayout heading='Assets'>
        <Grid
          gridTemplateColumns='repeat(auto-fit, minmax(240px,1fr))'
          gap='2px'
        >
          {assets.map((item) => (
            <AssetItem key={item.id} asset={item} />
          ))}
        </Grid>
      </ProductsLayout>
      <SegmentActions />
    </Box>
  );
}

export default AssetList;
