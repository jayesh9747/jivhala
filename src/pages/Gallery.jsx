import GalleryHeroSection from "../components/Gallery/GalleryHerosection.jsx";
import DonationForm from "../components/Donate/DonationForm.jsx";
import PhotoGrid from "../components/Gallery/PhotoGrid.jsx";
import Album from "../components/Gallery/Album.jsx";

function AboutUsMain() {
  return (
    <div className="bg-[#F8F3EA] -mt-[30px] pb-8">
    <div className="flex flex-col gap-10 m-4 sm:m-4 md:m-8 lg:m-8">
      <GalleryHeroSection />
      <Album />
    </div>
    </div>
  );
}
export default AboutUsMain;
