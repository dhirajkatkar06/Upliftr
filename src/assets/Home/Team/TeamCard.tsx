import styled from "styled-components";
import { TeamMember } from "../../../../data/team";

interface Props {
  person: TeamMember;
  $activePerson: boolean;
  setActivePerson: () => void;
  className?: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
export default function TeamCard({
  person: { name, image },
  $activePerson,
  setActivePerson,
  className,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  return (
    <Card
      className={className}
      $activePerson={$activePerson}
      onClick={() => setActivePerson()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={image} alt={name} />
      <span>{name}</span>
    </Card>
  );
}

const Card = styled.div<{ $activePerson: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: 0.2s 0.4s ease-in-out;
  mix-blend-mode: multiply;

  span {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
    padding: 0.1rem 0.2rem;
    color: var(--color-dark);
    font-size: 0.875rem;
    opacity: ${({ $activePerson }) => ($activePerson ? 0 : 1)};
  }

  &:hover,
  &:focus {
    transition: 0.4s ease;
  }

  img {
    flex: 1;
    height: 35vh;
    max-height: 376px;
    max-width: 255px;
    cursor: pointer;
    transition: 0.6s ease;
    opacity: ${({ $activePerson }) => ($activePerson ? 1 : 0.35)};

    @media (max-width: 1191px) {
      height: 40vh;
      max-width: 360px;
      max-height: none;
    }
  }
`;
