import { useState } from "react";

export function useHeaderNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return {
    menuOpen,
    toggleMenu,
    closeMenu,
  };
}
