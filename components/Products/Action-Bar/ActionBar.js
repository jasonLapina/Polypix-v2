import { Button, HStack, Box } from "@chakra-ui/react";
import Searchbar from "./Searchbar";
import ComponentLayout from "@/components/Shared/Layout/ComponentLayout";
function ActionBar() {
  const dummyActions = Array.from({
    length: 4,
  });
  return (
    <HStack
      zIndex={99}
      transition='all .4s'
      maxW='1800px'
      mx='auto'
      py='8px'
      justifyContent='space-between'
      align='center'
      top='80px'
      pos='sticky'
      px='32px'
    >
      <HStack pr='16px' gap='32px'>
        {dummyActions.map((item, i) => {
          return <Button key={i}>button</Button>;
        })}
      </HStack>
      <Searchbar />
    </HStack>
  );
}

export default ActionBar;
