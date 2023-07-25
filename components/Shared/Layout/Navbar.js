import { Box, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  {
    text: "Home",
    link: "/",
  },
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
      bgColor='blackAlpha.400'
      zIndex={99}
      pos='fixed'
      transition='all .4s'
      w='100%'
      gap='16px'
      py='16px'
    >
      <Box boxSize='24px' />
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
          >
            {item.text}
          </Button>
        );
      })}
    </HStack>
  );
}

export default Navbar;
