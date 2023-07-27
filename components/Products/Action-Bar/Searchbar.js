import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
function Searchbar() {
  return (
    <Box flexGrow={0.5}>
      <InputGroup borderColor='blue.500'>
        <Input placeholder='search' />
        <InputRightElement>
          <Search2Icon color='blue.500' />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default Searchbar;
