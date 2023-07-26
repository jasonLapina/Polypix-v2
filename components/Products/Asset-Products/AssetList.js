import { Box, Grid, Heading } from "@chakra-ui/react";
import ComponentLayout from "../../Shared/Layout/ComponentLayout";
import AssetItem from "./AssetItem";
function AssetList({ assets }) {
  return (
    <Box>
      <ComponentLayout>
        <Heading mb='24px' textAlign='center' fontWeight='thin'>
          Assets
        </Heading>
        <Grid
          gridTemplateColumns='repeat(auto-fit, minmax(320px,1fr))'
          columnGap='8px'
          rowGap='24px'
        >
          {assets.map((item) => (
            <AssetItem key={item.id} asset={item} />
          ))}
        </Grid>
      </ComponentLayout>
    </Box>
  );
}

export default AssetList;
