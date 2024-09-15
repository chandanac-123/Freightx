import AboutCollapse from "@/components/about/AboutCollapse";
import AboutCounter from "@/components/about/AboutCounter";
import AboutCoursole from "@/components/about/AboutCursoel";
import AboutMain from "@/components/about/AboutMain";
import AboutSub from "@/components/about/AboutSub";
import OurTeam from "@/components/about/OurTeam";

export default function Page() {
  return (
    <div>
      <AboutMain />
      <AboutSub />
      <AboutCounter />
      <AboutCoursole/>
      <AboutCollapse/>
      <OurTeam/>
    </div>
  );
}
