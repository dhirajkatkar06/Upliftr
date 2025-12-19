//import { useLoadScript } from "@react-google-maps/api";
import styled from "styled-components";
import { SectionProps } from "../App";
import InteractiveMap from "./InteractiveMap";

export default function MapSection({ id }: SectionProps) {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  // });

  return (
    <div id={id}>
      <MapContainer>
        <div className="grid-container">
          <Title>Find us here</Title>
        </div>

        <div className="grid-container">
          {/* <div className="grid">
            {isLoaded ? <InteractiveMap /> : <div>Loading map...</div>}
          </div> */}
          <div className="grid" style={{ height: "400px" }}>
            <InteractiveMap />
          </div>

          <AddressContainer>
            <CompanyTitle className="grid">
              Upliftr
            </CompanyTitle>
            <div className="grid">Marketing Agency</div>
            {/* <div className="grid">416 64 Göteborg</div> */}
          </AddressContainer>
        </div>
      </MapContainer>
    </div>
  );
}

const MapContainer = styled.div`
  padding-top: 5rem;
  @media (max-width: 621px) {
    padding-top: 4rem;
  }
`;

const Title = styled.h3`
  grid-column: main;
  font-size: var(--font-size-m);
  padding-bottom: 2rem;
`;

const AddressContainer = styled.div`
  grid-column: main;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 8rem;
  @media (max-width: 821px) {
    padding-bottom: 6rem;
  }
  @media (max-width: 621px) {
    padding-bottom: 4rem;
  }
`;

const CompanyTitle = styled.h4`
  grid-column: main;
  font-size: var(--font-size-s);
`;
