import { Box, HStack, Heading } from "@chakra-ui/react";
import PlanItem from "./PlanItem";
import ComponentLayout from "../Shared/Layout/ComponentLayout";
function PlanList() {
  const dummyPlans = [
    {
      title: "Plan title",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, quas. Ipsum nemo voluptatem rerum modi dolor dolores inventore asperiores, voluptates ratione esse",
      points: ["lorem ipsum dolor", "lorem ipsum dolor", "lorem ipsum dolor"],
      bottomText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, quas. Ipsum nemo voluptatem rerum modi dolor dolores inventore asperiores, voluptates ratione esse",
      price: "FREE",
    },
    {
      title: "Plan title",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, quas. Ipsum nemo voluptatem rerum modi dolor dolores inventore asperiores, voluptates ratione esse",
      points: ["lorem ipsum dolor", "lorem ipsum dolor", "lorem ipsum dolor"],
      bottomText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, quas. Ipsum nemo voluptatem rerum modi dolor dolores inventore asperiores, voluptates ratione esse",
      price: "$19",
    },
    {
      title: "Plan title",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, quas. Ipsum nemo voluptatem rerum modi dolor dolores inventore asperiores, voluptates ratione esse",
      points: ["lorem ipsum dolor", "lorem ipsum dolor", "lorem ipsum dolor"],
      bottomText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, quas. Ipsum nemo voluptatem rerum modi dolor dolores inventore asperiores, voluptates ratione esse",
      price: "$140",
    },
    {
      title: "Studio",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, quas. Ipsum nemo voluptatem rerum modi dolor dolores inventore asperiores, voluptates ratione esse",
      points: ["lorem ipsum dolor", "lorem ipsum dolor", "lorem ipsum dolor"],
      bottomText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, quas. Ipsum nemo voluptatem rerum modi dolor dolores inventore asperiores, voluptates ratione esse",
      price: "",
    },
  ];
  return (
    <Box color='white' bgColor='black'>
      <ComponentLayout py='80px'>
        <Heading fontSize='48px' textTransform='uppercase' textAlign='center'>
          Choose your plan
        </Heading>
        <HStack
          justifyContent='space-around'
          justifyItems='center'
          mt='120px'
          gap='24px'
        >
          {dummyPlans.map((item) => (
            <PlanItem plan={item} />
          ))}
        </HStack>
      </ComponentLayout>
    </Box>
  );
}

export default PlanList;
