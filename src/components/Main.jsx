import HeroSection from "../components/Home/HeroSection.jsx";
import Mission from "../components/Home/Mission.jsx";
import PerspectiveSection from "../components/Home/PerspectiveSection.jsx";
import OurProgram from "../components/Home/OurProgram.jsx";
import Contact from "./Home/Contact.jsx";
import DonationForm from "./Home/DonationForm.jsx";
import Vision from "./Home/Vision.jsx";

function Main() {
  return (
    <div className="bg-[#F8F3EA] -mt-[30px] pb-8">
    <div className="flex flex-col gap-10 my-4 sm:m-4 md:m-8 lg:m-8">
      <HeroSection />
      <Vision />
      <PerspectiveSection />
      <Mission /> 
      <OurProgram />
      <DonationForm />
      <Contact />
    </div>
    </div>
  );
}
export default Main;
