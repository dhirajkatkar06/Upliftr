import styled from "styled-components";
import { Case } from "../../../../data/case";

export default function CaseCard({
  id,
  video,
  image,
  description,
  brand,
}: Case) {
  return (
    <>
      <CaseNr>{id}</CaseNr>
      <CaseVideo>
        <video id="background-video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <img src={image} alt="" />
      </CaseVideo>
      <CaseText>
        <p>{brand} </p>
        {description}
      </CaseText>
    </>
  );
}

const CaseText = styled.div`
  padding: 1rem 0;
  width: 100%;
  background-color: var(--color-light);
  height: 6.69rem;
  font-size: 0.875rem;

  p {
    font-weight: bold;
    padding-bottom: 0.2rem;
  }

  @media (max-width: 624px) {
    font-size: var(--font-size-xs);
    padding: 0.6rem 0;
    height: 5rem;
  }
`;

const CaseNr = styled.span`
  position: absolute;
  top: -2.7rem;
  font-size: 1.5rem;
  font-weight: 300;
`;

const CaseVideo = styled.div`
  height: 28rem;

  video,
  img {
    position: absolute;
    width: 100%;
    height: 28rem;
    object-fit: cover;
  }

  img {
    &:hover {
      opacity: 0;
    }
  }

  @media (max-width: 684px) {
    height: 35vh;
    video,
    img {
      height: 35vh;
    }
  }
`;
