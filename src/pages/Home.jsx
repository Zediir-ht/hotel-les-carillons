import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import ServicesGrid from '../components/ServicesGrid';
import HotelSection from '../components/HotelSection';
import RestaurantSection from '../components/RestaurantSection';
import MeublesSection from '../components/MeublesSection';
import TourismeTeaser from '../components/TourismeTeaser';

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesGrid />
      <HotelSection />
      <RestaurantSection />
      <MeublesSection />
      <TourismeTeaser />
    </>
  );
}
