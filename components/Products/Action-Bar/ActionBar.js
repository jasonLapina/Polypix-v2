import { Button, HStack, Box } from "@chakra-ui/react";
import Searchbar from "./Searchbar";

function ActionBar() {
  const dummyActions = Array.from({
    length: 4,
  });
  return (
    <Box
      px='32px'
      py='8px'
      transition='all .4s'
      zIndex={99}
      bgColor='light'
      pos='sticky'
      top='79px'
      color='white'
    >
      <HStack
        maxW='1800px'
        mx='auto'
        justifyContent='space-between'
        align='center'
      >
        <HStack pr='16px' gap='16px'>
          {dummyActions.map((item, i) => {
            return (
              <Button bgColor='gray' key={i}>
                BUTTON
              </Button>
            );
          })}
        </HStack>
        <Searchbar />
      </HStack>
    </Box>
  );
}

export default ActionBar;
