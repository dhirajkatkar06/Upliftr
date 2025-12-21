import Footer from "../../Footer";
import Header from "../../Header";
import { useHeaderNavigation } from "../../Hooks/useHeaderNavigation";
import NavigationMenu from "../../NavigationMenu";
import BrandSection from "./Brands/BrandSection";
import CaseSection from "./Cases/CaseSection";
import HeroSection from "./Hero/HeroSection";
import MapSection from "./Map/MapSection";
import TeamSection from "./Team/TeamSection";
import ContactSection from "./Contact/ContactMidPath";
import WhatsAppButton from "./Whatsapp/WhatsAppButton"; // adjust path



export interface SectionProps {
  id: string;
}

function App() {
  const { menuOpen, toggleMenu, closeMenu } = useHeaderNavigation();

  return (
    <>
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
      {menuOpen && (
        <NavigationMenu
          isOpen={menuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
      )}
      <HeroSection id="hero" />
      <TeamSection id="team" />
      <BrandSection id="clients" />
      <CaseSection id="cases" />
      <MapSection id="map" />
      <ContactSection id="contact" />
      <Footer />
      {/* WhatsApp Floating Button */}
      <WhatsAppButton 
        phone="919769708255" // replace with your number
        message="Hello! I would like to get in touch with you." // default message
      />
    </>
  );
}

export default App;
