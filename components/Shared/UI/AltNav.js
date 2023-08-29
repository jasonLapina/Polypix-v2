import { Box, HStack, VStack, Text, Icon } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";

function AltNav({ items }) {
  return (
    <Box pb='80px' bgColor='primary'>
      <VStack color='white' gap='0' alignItems='normal'>
        {items.map((item) => (
          <Box
            key={item.text}
            borderBlockEnd='solid 1px gray'
            pos='relative'
            role='group'
            cursor='pointer'
          >
            <Box
              pos='absolute'
              bgColor='gray'
              w='0'
              h='100%'
              opacity='.1'
              transformOrigin='left'
              transition='all .4s'
              _groupHover={{
                w: "100%",
              }}
            />
            <HStack
              fontSize='40px'
              justifyContent='space-between'
              py='56px'
              maxW='1600px'
              mx='auto'
              zIndex={2}
            >
              <Text>{item.text}</Text>
              <Icon as={FaArrowRightLong} />
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default AltNav;
