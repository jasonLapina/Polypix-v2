import {
  Box,
  Grid,
  Input,
  Textarea,
  Text,
  VStack,
  HStack,
  Icon,
  Circle,
  Image,
} from "@chakra-ui/react";
import { TfiLinkedin, TfiFacebook, TfiInstagram } from "react-icons/tfi";
import ComponentLayout from "./ComponentLayout";
function Footer() {
  const socials = [
    {
      icon: TfiLinkedin,
      link: "",
    },
    {
      icon: TfiFacebook,
      link: "",
    },
    {
      icon: TfiInstagram,
      link: "",
    },
    {
      icon: TfiLinkedin,
      link: "",
    },
  ];

  const externals = [
    {
      header: "Products",
      links: [
        {
          text: "Unity Store",
          link: "",
        },
        {
          text: "Unreal Engine Store",
          link: "",
        },
        {
          text: "Artstation Store",
          link: "",
        },
      ],
    },
    {
      header: "Learning",
      links: [
        {
          text: "Educational Program",
          link: "",
        },
        {
          text: "Tutorials",
          link: "",
        },
      ],
    },
    {
      header: "Community",
      links: [
        {
          text: "Press Kit",
          link: "",
        },
        {
          text: "Jobs",
          link: "",
        },
        {
          text: "Discord Group",
          link: "",
        },
      ],
    },
  ];

  return (
    <Box bgColor='black' color='white' pt='40px' pb='80px'>
      <ComponentLayout>
        <Text mb='24px' fontSize='32px'>
          CONTACT US
        </Text>
        <Grid gridTemplateColumns='4fr 6fr'>
          {/* CONTACT FORM */}
          <Box>
            <VStack gap='16px' alignItems='normal'>
              <Input borderRadius='full' placeholder='EMAIL' />
              <Input borderRadius='full' placeholder='QUESTIONS' />
            </VStack>
          </Box>
          {/* SOCIAL LINKS */}
          <HStack gap='32px' justifySelf='end'>
            {socials.map((item, i) => (
              <Circle key={i} size='48px' border='solid 1.5px white'>
                <Icon fontSize='24px' as={item.icon} />
              </Circle>
            ))}
          </HStack>
        </Grid>
        <Grid alignItems='start' mt='80px' gridTemplateColumns='6fr 4fr'>
          {/* EXTERNAL LINKS */}
          <HStack alignItems='start' justifySelf='end' gap='48px'>
            {externals.map((item) => {
              return (
                <Box key={item.header}>
                  <Text
                    fontSize='20px'
                    mb='16px'
                    textTransform='uppercase'
                    fontWeight='bold'
                  >
                    {item.header}
                  </Text>
                  <VStack alignItems='start' gap='8px'>
                    {item.links.map((link) => (
                      <Text key={link.text}>{link.text}</Text>
                    ))}
                  </VStack>
                </Box>
              );
            })}
          </HStack>
          <HStack justifySelf='end' alignItems='center'>
            <Image w='120px' src='/logo.png' />
            <Box fontSize='18px'>
              <Text>Philippines, Cebu City</Text>
              <Text>6000, Cebu IT Park Fillinvest</Text>
              <Text>Bldg Tower 5</Text>
            </Box>
          </HStack>
        </Grid>
      </ComponentLayout>
    </Box>
  );
}

export default Footer;
