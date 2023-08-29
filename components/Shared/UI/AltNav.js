import { Box, HStack, VStack, Text } from "@chakra-ui/react";

function AltNav() {
  const dummyItems = [
    {
      text: "Services",
      link: "/services",
    },
  ];
  return (
    <Box bgColor='primary'>
      <VStack color='white' gap='0' alignItems='normal'>
        {dummyItems.map((item) => (
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
              py='80px'
              maxW='1800px'
              mx='auto'
              zIndex={2}
            >
              <Text>{item.text}</Text>
              <Text>&rarr;</Text>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default AltNav;
