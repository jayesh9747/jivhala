import GetInvolvedHeroSection from "./OurImpact/OurImpactHeroSection.jsx";
import Beneficiaries from "./OurImpact/Beneficiaries.jsx";
import Journey from "./OurImpact/Journey.jsx";

function OurImpactMain() {
  return (
    <div className="flex flex-col gap-10 m-4 sm:m-4 md:m-8 lg:m-8">
      <GetInvolvedHeroSection />
      <Beneficiaries />
      <Journey />
    </div>
  );
}
export default OurImpactMain;
