import styled from "styled-components";

interface BurgerMenuProps {
  toggleMenu: () => void;
  menuOpen: boolean;
}

export default function BurgerMenu({ toggleMenu, menuOpen }: BurgerMenuProps) {
  const handleToggleMenu = () => {
    toggleMenu();
  };

  return (
    <>
      <StyledBurgerMenu onClick={handleToggleMenu}>
        <Burger $menuOpen={menuOpen} />
      </StyledBurgerMenu>
    </>
  );
}

const StyledBurgerMenu = styled.div`
  cursor: pointer;
  position: relative;
  height: 2rem;
  z-index: 104;
  mix-blend-mode: difference;
  @media (max-width: 800px) {
    height: 1.8rem;
  }
`;

const Burger = styled.div<{ $menuOpen: boolean }>`
  width: 2.7rem;
  height: 0.2rem;
  position: relative;
  top: 1rem;
  background-color: ${({ $menuOpen }) =>
    $menuOpen === true ? "transparent" : "#fff"};

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: inherit;
    background-color: #fff;
    transition: width 0.4s ease;
    transition: rotate 0.5s 0.2s ease;
    width: inherit;
    height: inherit;
    transition: 0.3s ease;
  }

  &::after {
    rotate: ${({ $menuOpen }) => ($menuOpen ? "45deg" : "0")};
    top: ${({ $menuOpen }) => ($menuOpen ? "0" : "-.9rem")};
  }

  &::before {
    width: ${({ $menuOpen }) => ($menuOpen ? "2.7rem " : "1.6rem")};
    rotate: ${({ $menuOpen }) => ($menuOpen ? "-45deg" : "0")};
    top: ${({ $menuOpen }) => ($menuOpen ? "0" : "0.9rem")};
    right: 0;
  }

  @media (max-width: 800px) {
    width: 2.2rem;
    top: 50%;
    transform: translateY(-50%);

    &::after {
      top: ${({ $menuOpen }) => ($menuOpen ? "0" : "-0.8rem")};
    }

    &::before {
      width: ${({ $menuOpen }) => ($menuOpen ? "2.2rem " : "1.2rem")};
      top: ${({ $menuOpen }) => ($menuOpen ? "0" : "0.8rem")};
    }
  }
`;
