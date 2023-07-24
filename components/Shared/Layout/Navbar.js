import { Button, HStack } from "@chakra-ui/react";
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
      zIndex={99}
      pos='fixed'
      right='20px'
      top='16px'
      transition='all .4s'
    >
      {navItems.map((item) => {
        return (
          <Button
            _hover={{
              opacity: 1,
            }}
            opacity={isPastHero ? 0.4 : 1}
            borderRadius='40px'
            as={Link}
            href={item.link}
          >
            {item.text}
          </Button>
        );
      })}
    </HStack>
  );
}

export default Navbar;
