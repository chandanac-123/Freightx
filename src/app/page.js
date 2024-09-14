import Banner from "@/components/home-page/Banner";
import ClientSection from "@/components/home-page/ClientSection";
import Info from "@/components/home-page/Info";
import Service from "@/components/home-page/Service";

export default function Home() {
  return (
    <main>
        <Banner/>
        <ClientSection/>
        <Info/>
        <Service/>
    </main>
  );
}
