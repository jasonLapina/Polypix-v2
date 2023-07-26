import { Box, Heading } from "@chakra-ui/react";
import ComponentLayout from "../Shared/Layout/ComponentLayout";
function ProductsLayout(props) {
  const { heading, children } = props;
  return (
    <Box {...props}>
      <ComponentLayout>
        <Heading mb='24px' textAlign='center' fontWeight='thin'>
          {heading}
        </Heading>
        {children}
      </ComponentLayout>
    </Box>
  );
}

export default ProductsLayout;
