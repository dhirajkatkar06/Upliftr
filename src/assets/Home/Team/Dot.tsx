import styled from "styled-components";

interface Props {
  $activePerson: boolean;
  setActivePerson: () => void;
}

export default function Dot({ $activePerson, setActivePerson }: Props) {
  return (
    <>
      <StyledDot
        $activePerson={$activePerson}
        onClick={() => setActivePerson()}
      ></StyledDot>
    </>
  );
}

const StyledDot = styled.div<{ $activePerson: boolean }>`
  grid-column: main;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 10rem;
  background-color: var(--color-accent);
  opacity: ${({ $activePerson }) => ($activePerson ? 1 : 0.5)};
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
  @media (max-width: 450px) {
    width: 0.75rem;
    height: 0.75rem;
  }
`;
