import Hero from "./Hero";
import HomeSegment from "./HomeSegment";
function HomePage() {
  return (
    <>
      <Hero />
      <HomeSegment variant={1} />
      <HomeSegment variant={2} />
      <HomeSegment variant={1} />
    </>
  );
}

export default HomePage;
