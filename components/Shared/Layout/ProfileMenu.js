import { Avatar, Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
function ProfileMenu() {
  const menuItems = [
    {
      text: "Profile",
      link: "",
    },
    {
      text: "Plan upgrades",
      link: "",
    },
    {
      text: "order/payments",
      link: "",
    },
    {
      text: "video history",
      link: "",
    },
    {
      text: "my connections",
      link: "",
    },
    {
      text: "my wishlist",
      link: "",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Avatar onClick={onOpen} bgColor='primary' cursor='pointer' />
      <Drawer
        blockScrollOnMount={false}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size='sm'
      >
        <DrawerOverlay />
        <DrawerContent color='white' bgColor='secondary'>
          <DrawerCloseButton />
          <DrawerHeader py='40px'>
            <HStack alignItems='center' gap='16px'>
              <Avatar />
              <Box>
                <Text fontSize='24px' lineHeight='16px'>
                  Miguel Dumars
                </Text>
                <Text>Student</Text>
              </Box>
            </HStack>
          </DrawerHeader>
          <DrawerBody mt='40px'>
            <VStack
              borderBottom='solid 2px gray'
              gap='24px'
              alignItems='start'
              pb='24px'
            >
              {menuItems.map((item) => (
                <Button
                  fontSize='24px'
                  textTransform='uppercase'
                  key={item.text}
                  variant='link'
                  color='white'
                >
                  {item.text}
                </Button>
              ))}
            </VStack>
            <Button color='white' mt='24px' fontSize='24px' variant='link'>
              SIGN OUT
            </Button>
          </DrawerBody>
          <DrawerFooter pb='80px' justifyContent='start'>
            <Text>CONNECT WITH US</Text>
            <HStack></HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default ProfileMenu;
