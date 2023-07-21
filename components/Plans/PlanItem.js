import { Box, Button, Text, VStack } from "@chakra-ui/react";
function PlanItem({ plan }) {
  const { title, description, points, bottomText, price } = plan;
  return (
    <Box borderRadius='20px' bgColor='gray.200' p='24px'>
      <VStack align='normal' gap='24px'>
        <Text fontSize='32px'>{title}</Text>
        <Text>{description}</Text>
        <Box>
          {points.map((point) => (
            <Text key={point}>- {point}</Text>
          ))}
        </Box>
        <Text>{bottomText}</Text>
        <Text fontSize='32px'>{price}</Text>
      </VStack>
      <Button mt='16px' px='24px'>
        {title === "Studio" ? "Contact us" : "Text"}
      </Button>
    </Box>
  );
}

export default PlanItem;
