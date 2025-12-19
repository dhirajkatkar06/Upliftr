import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import teamMembers from "../../../../data/team";
import { SectionProps } from "../App";
import Dot from "./Dot";
import TeamCard from "./TeamCard";
import TeamText from "./TeamText";

export default function TeamSection({ id }: SectionProps) {
  const [activePersonIndex, setActivePersonIndex] = useState(0);
  const [activePerson, setActivePerson] = useState(false);
  const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(
    null
  );
  // Ref for the scroll container
  const galleryRef = useRef(null);

  const handleHover = (index: number) => {
    setActivePersonIndex(index);
    setActivePerson(true);
  };

  const handleHoverLeave = () => {
    setActivePerson(false);
  };

  const handleSetActivePerson = (index: number) => {
    setActivePersonIndex(index);
    setActivePerson(true);

    // Scroll to the selected card when it's activated
    if (scrollContainer) {
      const cardWidth =
        scrollContainer.querySelector(".team-card")?.clientWidth;
      if (cardWidth) {
        const scrollLeft =
          index * cardWidth - (scrollContainer.clientWidth - cardWidth) / 2;

        // Use scrollTo for smooth scrolling
        scrollContainer.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    // Ensure the scroll container reference is set
    if (galleryRef.current) {
      setScrollContainer(galleryRef.current);
    }
  }, []);

  return (
    <div id={id}>
      <Container>
        <div className="grid-container">
          <Title>What We Do Best</Title>
        </div>
        <div className="grid-container">
          <Carousel>
            <Gallery ref={galleryRef}>
              {teamMembers.map((person, index) => (
                <TeamCard
                  className="team-card"
                  person={person}
                  key={index}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleHoverLeave}
                  $activePerson={index === activePersonIndex}
                  setActivePerson={() => handleSetActivePerson(index)}
                ></TeamCard>
              ))}
            </Gallery>
            <DotContainer>
              {teamMembers.map((person, index) => (
                <Dot
                  $activePerson={index === activePersonIndex}
                  setActivePerson={() => handleSetActivePerson(index)}
                  key={index}
                ></Dot>
              ))}
            </DotContainer>
          </Carousel>
          <div className="grid">
            {teamMembers.map((person, index) => (
              <TeamText
                $activePerson={index === activePersonIndex}
                setActivePerson={() => handleSetActivePerson(index)}
                person={person}
                key={index}
                index={index}
              ></TeamText>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

const Title = styled.h4`
  grid-column: main;
  font-size: var(--font-size-m);
  padding-bottom: 2rem;
`;

const Carousel = styled.div`
  grid-column: main;
  position: relative;
  @media (max-width: 1143px) {
    grid-column: 2/4;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 0;
`;

const DotContainer = styled.div`
  position: absolute;
  gap: 0.4rem;
  grid-column: main;
  align-items: center;
  width: 100%;
  justify-content: center;
  display: flex;
  bottom: 0;
  left: 0;
`;

const Gallery = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  overflow-x: scroll;
  padding-bottom: 1.9rem;
  scroll-snap-type: x mandatory;

  & > * {
    scroll-snap-align: center;
  }

  @media (max-width: 700px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
