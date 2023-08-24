import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
function Searchbar() {
  return (
    <Box borderRadius='40px' bgColor='whiteAlpha.300' flexGrow={0.5}>
      <InputGroup borderColor='action'>
        <Input borderRadius='40px' placeholder='search' />
        <InputRightElement>
          <Search2Icon color='action' />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default Searchbar;
