import styled from "styled-components";
import cases from "../../../../data/case";
import { SectionProps } from "../App";
import CaseCard from "./CaseCard";

export default function CaseSection({ id }: SectionProps) {
  return (
    <div id={id}>
      <OuterGridContainer className="grid-container">
        <div className="grid">
          <Title>Client Cases</Title>
          <CaseVideos>
            {cases.map((individualCase, index) => (
              <CaseContainer key={index}>
                <CaseCard key={index} {...individualCase} />
              </CaseContainer>
            ))}
          </CaseVideos>
        </div>
      </OuterGridContainer>
    </div>
  );
}

const OuterGridContainer = styled.div`
  margin: 2rem 0 15rem;
  transform: translateY(8vh);
  color: var(--clr-accent);

  @media (max-width: 1000px) {
    margin: 2rem 0 10rem;
  }
`;

const CaseVideos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  height: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 4rem;
    padding: 1rem 10vw;
  }

  @media (max-width: 821px) {
    padding: 1rem 0 0;
    row-gap: 1rem;
  }

  @media (max-width: 280px) {
    grid-template-columns: 1fr;
    padding: 3rem 0 0;
  }
`;

const Title = styled.h2`
  font-size: var(--font-size-m);
  font-weight: 500;
  @media (max-width: 1000px) {
    padding: 0 10vw;
  }

  @media (max-width: 821px) {
    padding: 0;
  }
`;

const CaseContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  &:nth-child(odd) {
    transform: translateY(8vh);
  }

  @media (max-width: 280px) {
    &:nth-child(odd) {
      transform: translateY(0vh);
    }
  }
`;
