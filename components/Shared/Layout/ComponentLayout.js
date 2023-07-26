import { Box } from "@chakra-ui/react";
function ComponentLayout(props) {
  return (
    <Box maxW='1800px' mx='auto' {...props}>
      {props.children}
    </Box>
  );
}

export default ComponentLayout;
