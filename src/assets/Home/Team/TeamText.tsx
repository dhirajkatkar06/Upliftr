import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { TeamMember } from "../../../../data/team";
import { createSlug } from "../../../slug/utils";
import arrow from "/icons/arrow.svg";
interface Props {
  $activePerson: boolean;
  setActivePerson: (index: number) => void;
  person: TeamMember;
  index: number;
}

export default function TeamText({
  person: { name, jobTitle, description, quote, id },
  $activePerson,
}: Props) {
  const slug = createSlug(name);
  return (
    <Card>
      <InfoSection $activePerson={$activePerson}>
        <h3>{name}</h3>
        <h4>{jobTitle}</h4>
        <p>{description}</p>
        <StyledNavLink to={`/profile/${slug}`}>
          Go to profile <img src={arrow} alt="arrow" />
        </StyledNavLink>
      </InfoSection>
      <Quote $activePerson={$activePerson}>
        <p>"{quote}"</p>
      </Quote>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-evenly;
  gap: 6rem;

  @media (max-width: 1000px) {
    gap: 4rem;
  }

  @media (max-width: 800px) {
    gap: 2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const InfoSection = styled.div<{ $activePerson: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  padding-top: 1rem;
  display: ${({ $activePerson }) => ($activePerson ? "block" : "none")};

  h3 {
    font-size: var(--font-size-m);
  }

  h4 {
    font-size: var(--font-size-s);
    font-weight: 400;
  }

  p {
    padding: 1rem 0;
  }

  @media (max-width: 800px) {
    max-width: 380px;
  }
`;

const Quote = styled.div<{ $activePerson: boolean }>`
  max-width: 480px;
  display: ${({ $activePerson }) => ($activePerson ? "block" : "none")};

  p {
    color: var(--color-accent);
    font-size: var(--font-size-m);
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 800px) {
    max-width: 380px;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 1rem;
  align-items: center;
  white-space: nowrap;
  font-size: 1.3rem;
  text-decoration: none;
  font-weight: 800;

  img {
    width: 1.6rem;
    height: auto;
    @media (max-width: 800px) {
      width: 1rem;
    }
  }

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;
