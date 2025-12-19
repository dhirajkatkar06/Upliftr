import { useEffect, useState } from "react";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import logo from "/icons/logo.svg";

interface HeaderProps {
  toggleMenu: () => void;
  menuOpen: boolean;
}

export default function Header({ toggleMenu, menuOpen }: HeaderProps) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - 1 * 43) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container className="grid-container" $scrolling={scrolling}>
        <HeaderInner className="grid">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <BurgerMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </HeaderInner>
      </Container>
    </>
  );
}

const Container = styled.div<{ $scrolling: boolean }>`
  background-color: transparent;
  position: fixed;
  mix-blend-mode: ${({ $scrolling }) => ($scrolling ? "difference" : "none")};
  width: 100%;
  z-index: 999;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.4rem 0;
  img {
    height: 35px;
  }

  @media (max-width: 800px) {
    padding: 1.2rem 0;

    img {
      height: 30px;
    }
  }
`;
