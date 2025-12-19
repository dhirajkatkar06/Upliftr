// import { GoogleMap, InfoWindowF, MarkerF } from '@react-google-maps/api';
// import { useMemo, useState } from 'react';
// import styled from 'styled-components';

// export default function InteractiveMap() {
//   const [isOpen, setIsOpen] = useState(false);
//   const address = useMemo(
//     () => ({ lat: 57.70992004609615, lng: 11.994712202229747 }),
//     []
//   );
//   const options = useMemo(
//     () => ({
//       mapId: 'e7f0fbdf65035845',
//       disableDefaultUI: true,
//       clickableIcons: false,
//       zoomControl: true,
//     }),
//     []
//   );

//   const toggleOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Container>
//       <GoogleMap
//         zoom={14}
//         center={address}
//         mapContainerClassName="map-container"
//         options={options}
//       >
//         <MarkerF
//           position={address}
//           onClick={toggleOpen}
//           icon={{
//             url: '/icons/map-marker-icon.svg',
//             scaledSize: new window.google.maps.Size(40, 40),
//           }}
//         />
//         {isOpen && (
//           <InfoWindowF position={address} onCloseClick={toggleOpen}>
//             <AddressContainer>
//               <h5>Upliftr</h5>
//               <p>Marketing Agency</p>
//               {/* <p>416 64 Göteborg</p> */}
//             </AddressContainer>
//           </InfoWindowF>
//         )}
//       </GoogleMap>
//     </Container>
//   );
// }

// const Container = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
// `;

// const AddressContainer = styled.div`
//   font-family: 'Space Grotesk', sans-serif;
//   margin-right: 1rem;
// `;

// export default function InteractiveMap() {
//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1234567890123!2d73.08859!3d19.16666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0b0b0b0b0b1%3A0x0!2sMangalya%20Complex%2C%20Garibacha%20Wada%2C%20MP%20Road%2C%20Dombivli%20West!5e0!3m2!1sen!2sin!4v1234567890https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1234567890123!2d73.0987654321!3d19.215432109876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1234567890%3A0xabcdef1234567890!2sDombivli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
//         style={{
//           border: 0,
//           width: "100%",
//           height: "100%",
//           filter: "grayscale(100%) brightness(90%) contrast(125%)",
//         }}
//         loading="lazy"
//         allowFullScreen
//         referrerPolicy="no-referrer-when-downgrade"
//       />
//     </div>
//   );
// }

export default function InteractiveMap() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1234567890123!2d73.08859!3d19.16666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0b0b0b0b0b1%3A0x0!2sMangalya%20Complex%2C%20Garibacha%20Wada%2C%20MP%20Road%2C%20Dombivli%20West!5e0!3m2!1sen!2sin!4v1234567890https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1234567890123!2d73.0987654321!3d19.215432109876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1234567890%3A0xabcdef1234567890!2sDombivli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
        style={{
          width: "100%",
          height: "100%",
          border: 0,
          filter: "grayscale(100%) brightness(90%) contrast(125%)",
          transition: "filter 0.4s ease",
        }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = "grayscale(0%)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter =
            "grayscale(100%) brightness(90%) contrast(125%)";
        }}
      />
    </div>
  );
}

