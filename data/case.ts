export interface Case {
  id: string;
  image: string;
  video: string;
  description: string;
  brand: string;
}

const cases: Case[] = [
  {
    id: '01',
    image: '/videos/image1.png',
    video: '/videos/video1.mp4',
    description:
      'We brought a innovative 3D modeling vision to life, combining creativity with cutting-edge technology for stunning visual impact.',

    brand: 'TechVanguard',
  },
  {
    id: '02',
    image: '/videos/image2.png',
    video: '/videos/video2.mp4',
    description:
      'Pushed the boundaries of design with an experimental 3D geometric model.',
    brand: 'Geomagic Wonders',
  },
  {
    id: '03',
    image: '/videos/image3.png',
    video: '/videos/video3.mp4',
    description:
      'We developed a user-friendly webshop streamlining the rental process for photo studios and equipment.',
    brand: 'Rent a Studio',
  },
  {
    id: '04',
    image: '/videos/image4.png',
    video: '/videos/video4.mp4',
    description:
      'Our team created a commercial and website, enhancing brand awareness and customer engagement.',
    brand: 'UrbanRide',
  },
];

export default cases;
