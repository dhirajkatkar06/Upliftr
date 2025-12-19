import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { SectionProps } from "../App";

const brandLogos = [
  "./client-brand-logos/aesop-logo.svg",
  "./client-brand-logos/ikea-logo.svg",
  "./client-brand-logos/hay-logo.svg",
  "./client-brand-logos/teurn-logo.svg",
  "./client-brand-logos/new-works-logo.svg",
  "./client-brand-logos/bosch-logo.svg",
  "./client-brand-logos/prada-logo.svg",
  "./client-brand-logos/vitra-logo.svg",
  "./client-brand-logos/sonos-logo.svg",
  "./client-brand-logos/skf-logo.svg",
  "./client-brand-logos/flattered-logo.svg",
  "./client-brand-logos/polestar-logo.svg",
  "./client-brand-logos/electrolux-logo.svg",
  "./client-brand-logos/volvo-logo.svg",
];

export default function BrandSection({ id }: SectionProps) {
  return (
    <Background id={id}>
      <div className="grid-container">
        <div className="grid">
          <Heading>Clients we've worked with</Heading>
        </div>
      </div>
      <BrandContainer>
        <Marquee speed={18}>
          <Row>
            {brandLogos.map((logo, index) => (
              <BrandLogo key={index} src={logo} alt={`Brand Logo ${index}`} />
            ))}
          </Row>
        </Marquee>
        <Marquee speed={18} direction="right">
          <Row className="row2">
            {brandLogos.map((logo, index) => (
              <BrandLogo key={index} src={logo} alt={`Brand Logo ${index}`} />
            ))}
          </Row>
        </Marquee>
        <Marquee speed={18}>
          <Row className="row3">
            {brandLogos.map((logo, index) => (
              <BrandLogo key={index} src={logo} alt={`Brand Logo ${index}`} />
            ))}
          </Row>
        </Marquee>
      </BrandContainer>
    </Background>
  );
}

const Background = styled.div`
  background: var(--color-dark);
  padding: 12rem 0 14rem;
`;

const BrandContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 1.5rem;
  justify-content: space-between;
  overflow: hidden;
  background: var(--color-dark);

  .row2 {
    flex-direction: row-reverse;
  }

  .row3 {
    transform: translateX(-30%);
    display: none;
    @media (max-width: 940px) {
      display: flex;
    }
  }
`;

const Heading = styled.h4`
  color: var(--color-light);
  padding-bottom: 4rem;

  @media (max-width: 540px) {
    padding-bottom: 3rem;
  }
`;

const Row = styled.div`
  display: flex;
`;

const BrandLogo = styled.img`
  width: auto;
  height: 1.8rem;
  padding-right: 2rem;

  @media (max-width: 1024px) {
    height: 4%;
  }

  @media (max-width: 768px) {
    height: 5vw;
  }
`;
