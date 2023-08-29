import { Box, Button, HStack, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProfileMenu from "./ProfileMenu";

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
      window.scrollY >= window.innerHeight / 2 - 84
    ) {
      setIsPastHero(true);
    } else {
      setIsPastHero(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [route.pathname]);

  return (
    <HStack
      // bgColor={isPastHero ? "black" : "none"}
      zIndex={99}
      pos='fixed'
      transition='all .4s'
      w='100%'
      px='16px'
      justifyContent='space-between'
      align='center'
    >
      <Box py='8px' as={Link} href='/' cursor='pointer' boxSize='64px'>
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
              // opacity={isPastHero ? 0.4 : 1}
              borderRadius='40px'
              as={Link}
              href={item.link}
              color='white'
              textTransform='uppercase'
            >
              {item.text}
            </Button>
          );
        })}
        <ProfileMenu />
      </HStack>
    </HStack>
  );
}

export default Navbar;
