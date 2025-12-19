import { useEffect } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { useHeaderNavigation } from "../../Hooks/useHeaderNavigation";
import NavigationMenu from "../../NavigationMenu";
import AboutSection from "./About/AboutSection";
import ContactSection from "./Contact/ContactSection";

function ProfilePage() {
  const { menuOpen, toggleMenu, closeMenu } = useHeaderNavigation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <AboutSection />
      <ContactSection id="contact" />
      <Footer />
    </>
  );
}

export default ProfilePage;
