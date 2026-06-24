import Banner from "@/components/home-page/Banner";
import GetInTouch from "@/components/home-page/GetInTouch";
import Info from "@/components/home-page/Info";
import MakeChanges from "@/components/home-page/MakeChanges";
import MovigBanner from "@/components/home-page/MovigBanner";
import Service from "@/components/home-page/Service";

export default function Home() {
  return (
    <main>
      <Banner />
      <Info />
      <Service />
      <MakeChanges />
      <GetInTouch />
      <MovigBanner />
    </main>
  );
}
