import CoreValuesSection from "@/components/about/AboutCompitency";
import AboutMain from "@/components/about/AboutMain";
import AboutMission from "@/components/about/AboutMission";
import AboutSub from "@/components/about/AboutSub";

export default function Page() {
  return (
    <div>
      <AboutMain />
      <AboutSub />
      <AboutMission />
      <CoreValuesSection />
    </div>
  );
}
