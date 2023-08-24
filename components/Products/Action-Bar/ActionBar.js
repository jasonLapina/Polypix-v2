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
      bgColor='blackAlpha.400'
      pos='sticky'
      top='79px'
      _hover={{
        bgColor: "blackAlpha.600",
      }}
    >
      <HStack
        maxW='1800px'
        mx='auto'
        justifyContent='space-between'
        align='center'
      >
        <HStack pr='16px' gap='16px'>
          {dummyActions.map((item, i) => {
            return <Button key={i}>BUTTON</Button>;
          })}
        </HStack>
        <Searchbar />
      </HStack>
    </Box>
  );
}

export default ActionBar;
