import AboutCollapse from "@/components/about/AboutCollapse";
import CoreValuesSection from "@/components/about/AboutCompitency";
import AboutCounter from "@/components/about/AboutCounter";
import AboutCoursole from "@/components/about/AboutCursoel";
import AboutMain from "@/components/about/AboutMain";
import AboutMission from "@/components/about/AboutMission";
import AboutSub from "@/components/about/AboutSub";
import OurTeam from "@/components/about/OurTeam";

export default function Page() {
  return (
    <div>
      <AboutMain />
      <AboutSub />
      <AboutMission/>
      <CoreValuesSection/>
      <AboutCounter />
      <AboutCoursole/>
      <AboutCollapse/>
      <OurTeam/>
    </div>
  );
}
