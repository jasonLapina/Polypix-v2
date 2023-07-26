import { Grid } from "@chakra-ui/react";
import AssetItem from "./AssetItem";
import ProductsLayout from "../ProductsLayout";

function AssetList({ assets }) {
  return (
    <ProductsLayout heading='Assets'>
      <Grid
        gridTemplateColumns='repeat(auto-fit, minmax(320px,1fr))'
        columnGap='8px'
        rowGap='24px'
      >
        {assets.map((item) => (
          <AssetItem key={item.id} asset={item} />
        ))}
      </Grid>
    </ProductsLayout>
  );
}

export default AssetList;
