import Hero from "./Hero";
import HomeSegment from "./HomeSegment";
import Testimonials from "./Testimonials";
function HomePage() {
  return (
    <>
      <Hero />
      <HomeSegment variant={1} />
      <HomeSegment variant={2} />
      <HomeSegment variant={1} />
      <Testimonials />
    </>
  );
}

export default HomePage;
