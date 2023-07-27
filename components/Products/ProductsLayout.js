import { Box, Heading } from "@chakra-ui/react";
import ComponentLayout from "../Shared/Layout/ComponentLayout";
function ProductsLayout(props) {
  const { heading, children } = props;
  return (
    <Box py='8px' {...props}>
      <ComponentLayout>
        <Heading mb='8px' textTransform='uppercase' fontWeight='extrabold'>
          {heading}
        </Heading>
        {children}
      </ComponentLayout>
    </Box>
  );
}

export default ProductsLayout;
