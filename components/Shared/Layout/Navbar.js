import { Box, Button, HStack, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const navItems = [
  {
    text: "Services",
    link: "/services",
  },
  {
    text: "Edu Collab",
    link: "/edu",
  },
  {
    text: "About Us",
    link: "/about",
  },
  {
    text: "Products",
    link: "/products",
  },
  {
    text: "Sign in",
    link: "/auth",
  },
  {
    text: "Plans",
    link: "/plans",
  },
];

function Navbar() {
  const [isPastHero, setIsPastHero] = useState(false);
  const route = useRouter();

  const handleScroll = () => {
    if (
      window.scrollY >= window.innerHeight &&
      route.pathname !== "/products"
    ) {
      setIsPastHero(true);
    } else if (
      route.pathname === "/products" &&
      window.scrollY >= window.innerHeight * 0.5
    ) {
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
      _hover={{
        bgColor: "blackAlpha.600",
      }}
    >
      <Box as={Link} href='/' cursor='pointer' boxSize='64px'>
        <Image src='/logo.png' w='100%' />
      </Box>
      <HStack pr='16px' gap='32px' justifyContent='end'>
        {navItems.map((item) => {
          return (
            <Button
              key={item.text}
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
              textTransform='uppercase'
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
