import GetInTouch from "@/components/common/GetInTouch";
import Banner from "@/components/home-page/Banner";
import ClientSection from "@/components/home-page/ClientSection";
import Info from "@/components/home-page/Info";
import MakeChanges from "@/components/home-page/MakeChanges";
import MovigBanner from "@/components/home-page/MovigBanner";
import OurBegining from "@/components/home-page/OurBegining";
import Service from "@/components/home-page/Service";
import Solution from "@/components/home-page/Solution";

export default function Home() {
  return (
    <main>
        <Banner/>
        <Info/>
        
        <Service/>
        <MakeChanges/>
        <OurBegining/>
     
        <Solution/>
        <GetInTouch/>
        <MovigBanner/>
        <ClientSection/>
    </main>
  );
}
