export interface TeamMember {
  id: string;
  image: string;
  name: string;
  jobTitle: string;
  description: string;
  quote: string;
  presentation: string;
  skills: string[];
  mail: string;
  phone: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    image: "/images/taryn.png",
    name: "Performance Markerting",
    jobTitle: "Data-driven ad campaigns designed to maximize reach, leads, and ROI.",
    description:
      "We create and manage data-driven advertising campaigns focused on real business outcomes. From strategy and audience targeting to continuous optimization, our performance marketing ensures maximum reach, quality leads, and measurable ROI across platforms.",
    quote:
      "Performance marketing isn’t about spending more — it’s about converting better.",
    presentation:
      "Our performance marketing solutions are designed to maximize ROI through precise targeting, compelling creatives, and ongoing optimization. We help brands grow faster with campaigns that are efficient, scalable, and results-oriented.",
    skills: [
      "ROI-Driven",
      "High-Conversion",
      "Lead Generation",
      "Campaign Optimization",
      "Audience Targeting",
      "Targeted Ads",
      "Performance Tracking",
    ],
    mail: "dhirajkatkardrk@gmail.com",
    phone: "9769708255",
  },
  {
    id: "2",
    image: "/images/eleanor.png",
    name: "Social Media Management",
    jobTitle: "Managing your social presence with consistent content, engagement, and growth-focused strategies.",
    description:
      "Our social media management services help brands stay active, relevant, and visible. We create structured content calendars, manage daily posting, and engage with your audience to drive organic growth and long-term brand value.",
    quote: "Social media isn’t just posting — it’s building presence.",
    presentation:
      "We manage your social media end to end — from content planning and posting to audience engagement and performance tracking. Our strategies are designed to build a strong online presence, grow your audience, and keep your brand consistent across all platforms.",
    skills: [
      "Content Planning",
      "Brand Consistency",
      "Profile Optimization",
      "Trend Monitoring",
      "Audience Engagement",
      "Brand Voice",
      "Analytics Tracking",
    ],
    mail: "dhirajkatkardrk@gmail.com",
    phone: "9769708255",
  },
  {
    id: "3",
    image: "/images/gage.png",
    name: "Production",
    jobTitle: "High-quality photo and video production that brings your brand story to life.",
    description:
      "We handle end-to-end photo and video production to create visually compelling content for your brand. From concept planning to final editing, our production team ensures every frame reflects your brand’s identity and engages your audience effectively.",
    quote: "Every frame tells your brand story.",
    presentation:
      "We specialize in producing content that strengthens your brand story. Our team plans, shoots, and edits photos and videos that not only look professional but also engage and inspire your target audience across digital platforms.",
    skills: [
      "Concept Planning",
      "Shooting",
      "Video Editing",
      "Photo Editing",
      "Visual Branding",
      "Post-Production",
      "Storyboarding",
    ],
    mail: "dhirajkatkardrk@gmail.com",
    phone: "9769708255",
  },
  {
    id: "4",
    image: "/images/lila-marie.png",
    name: "Web Development",
    jobTitle: "Modern, responsive websites designed to attract, engage, and convert users.",
    description:
      "We build modern, responsive websites that represent your brand and support your marketing goals. From design to development, our websites are optimized for performance, usability, and conversions across all devices.",
    quote: "Design that attracts. Development that converts.",
    presentation:
      "Our web development services focus on creating fast, user-friendly websites that turn visitors into customers. Every layout, interaction, and feature is designed to improve engagement and drive results.",
    skills: [
      "Responsive Design",
      "SEO Friendly",
      "User Experience",
      "Custom Development",
      "Conversion Focused",
      "Performance Optimized",
      "Mobile Optimized",
    ],
    mail: "dhirajkatkardrk@gmail.com",
    phone: "9769708255",
  },
  {
    id: "5",
    image: "/images/marlon.png",
    name: "Influencer Marketing",
    jobTitle: "Connecting your brand with the right influencers to build trust and reach.",
    description:
      "We create and manage influencer campaigns that connect your brand with the right creators. From influencer selection to campaign execution and tracking, we focus on building authentic partnerships that increase reach, trust, and engagement.",
    quote: "Influence works best when it feels real.",
    presentation:
      "Our influencer marketing strategies are designed to amplify brand visibility and drive meaningful engagement. We collaborate with relevant influencers to create content that resonates with your target audience and supports your marketing goals.",
    skills: [
      "Brand Collaborations",
      "Authentic Reach",
      "Audience Trust",
      "Influencer Outreach",
      "Brand Awareness",
      "Content Amplification",
      "Engagement Growth",
    ],
    mail: "dhirajkatkardrk@gmail.com",
    phone: "9769708255",
  },
];

export default teamMembers;
