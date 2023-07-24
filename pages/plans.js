import PlanList from "@/components/Plans/PlanList";
import PlanTestimonials from "@/components/Plans/PlanTestimonials";
import PlansHero from "@/components/Plans/PlansHero";

function plans() {
  return (
    <>
      <PlansHero />
      <PlanList />
      <PlanTestimonials />
    </>
  );
}

export default plans;
