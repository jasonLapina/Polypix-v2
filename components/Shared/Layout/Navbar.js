import { Box, Button, HStack, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  {
    text: "Plans",
    link: "/plans",
  },
  {
    text: "Products",
    link: "/products",
  },
  {
    text: "Signup",
    link: "/",
  },
];

function Navbar() {
  const [isPastHero, setIsPastHero] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setIsPastHero(true);
    } else {
      setIsPastHero(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HStack
      bgColor={isPastHero ? "blackAlpha.400" : "none"}
      zIndex={99}
      pos='fixed'
      transition='all .4s'
      w='100%'
      px='16px'
      py='8px'
      justifyContent='space-between'
      align='center'
    >
      <Box as={Link} href='/' cursor='pointer' boxSize='64px'>
        <Image src='/logo.png' w='100%' />
      </Box>
      <HStack pr='16px' gap='32px' justifyContent='end'>
        {navItems.map((item) => {
          return (
            <Button
              _hover={{
                opacity: 1,
              }}
              variant='link'
              opacity={isPastHero ? 0.4 : 1}
              borderRadius='40px'
              as={Link}
              href={item.link}
              color='white'
              fontSize='20px'
            >
              {item.text}
            </Button>
          );
        })}
      </HStack>
    </HStack>
  );
}

export default Navbar;
