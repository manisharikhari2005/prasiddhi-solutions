import Hero from "@/components/Hero";
import StatsCards from "@/components/StatsCards";
import About from "./about/page";
import WhyChooseUsPage from "./prasiddhi/our-features/page";
import ServicesPage from "./services/page";


export default function Home() {
  return (
    <div>
      <Hero />
      <StatsCards />
      <About />
      <WhyChooseUsPage />
      <ServicesPage />
   
    </div>
  );
}
