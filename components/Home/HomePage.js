import { Box } from "@chakra-ui/react";
import Contact from "./Contact";
import Hero from "./Hero";
import HomeSegment from "./HomeSegment";
import Testimonials from "./Testimonials";

const segmentContents = [
  {
    header: "AAA QUALITY ART",
    text: "EACH AND EVERY ASSET IS MADE WITH ATTENTION TO DETAIL THOUGHTFULY MADE FOR EACH AND EVERY THEME. WE PROVIDE ART SERVICE FOR ALL YOUR PRODUCTION NEEDS.",
  },
  {
    header: "VIRTUAL PRODUCTION",
    text: "OUR ART KITS ALLOWS YOU TO MAKE WORLDS FAST AND TELL THE WORLD YOUR STORY. WE PROVIDE ART SERVICE FOR VIRTUAL PRODUCTION SETS MAKING YOUR VISION ALIVE IN A MATTER OF DAYS.",
  },
  {
    header: "PLUG AND PLAY",
    text: "OUR ART ASSET LIBRARY & KITS ALLOWS YOU TO CREATE WORLDS EASIER AND EXPANDABLE. CONSISTENCY IN STYLES MAKING OUR KITS COLLECTABLE AND FUN TO BUILD.",
  },
];

function HomePage() {
  return (
    <Box mb='160px'>
      <Hero />
      <HomeSegment
        variant={1}
        header={segmentContents[0].header}
        text={segmentContents[0].text}
      />
      <HomeSegment
        variant={2}
        header={segmentContents[1].header}
        text={segmentContents[1].text}
      />
      <HomeSegment
        variant={1}
        header={segmentContents[2].header}
        text={segmentContents[2].text}
      />
      <Testimonials />
      <Contact />
    </Box>
  );
}

export default HomePage;
