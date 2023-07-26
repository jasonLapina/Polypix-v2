import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Image,
  HStack,
  Box,
  VStack,
} from "@chakra-ui/react";
function AssetModal({ onClose, isOpen, asset }) {
  const { image, name, desc } = asset.attributes;

  return (
    <Modal
      size='4xl'
      blockScrollOnMount={true}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton bgColor='gray' color='white' borderRadius='full' />
        <ModalBody padding='0px'>
          <Image
            loading='lazy'
            src={`https://api.polypixstudios.com${image.data[0].attributes.url}`}
          />
        </ModalBody>

        <ModalFooter justifyContent='normal'>
          <HStack alignItems='start' w='100%' justifyContent='space-between'>
            <VStack align='normal'>
              <Text fontWeight='bold' fontSize='24px'>
                {name}
              </Text>
              <Text mt='-8px' fontWeight='bold' opacity='.7'>
                {desc}
              </Text>
            </VStack>
            <HStack alignItems='start' gap='40px'>
              <VStack borderRadius='10px' p='16px' border='2px solid gray'>
                <Text fontWeight='bold' fontSize='32px'>
                  2
                </Text>
                <Text>POINTS</Text>
              </VStack>
              <Button px='32px' textTransform='uppercase'>
                Sign in to download
              </Button>
            </HStack>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AssetModal;
