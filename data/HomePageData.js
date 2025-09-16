import img1 from "@/public/images/projects-page/mercedes.webp";
import img2 from "@/public/images/projects-page/gitex.webp";
import img3 from "@/public/images/projects-page/amadeus.webp";
import img4 from "@/public/images/home-page/home-exhibitions.webp";
import img5 from "@/public/images/home-page/home-vip.webp";
import img6 from "@/public/images/home-page/home-creative.webp";
import img7 from "@/public/images/projects-page/snapchat.webp";
import img8 from "@/public/images/home-page/home-logistics.webp";
import awards from "@/public/images/home-page/home-awards.webp";
import wedding from "@/public/images/home-page/home-wedding.webp";
import corporate from "@/public/images/home-page/home-corporate.webp";
import deloitte from "@/public/images/projects-page/deloitte-event.webp";

export const homeHighlights = [
  { image: awards, label: "Award Ceremony" },
  { image: wedding, label: "Luxury Wedding" },
  { image: corporate, label: "Corporate Event" },
  { image: deloitte, label: "Expo Showcase" },
];

export const homeServicesData = [
  {
    id: 1,
    title: "Brand Activations & Experiences",
    slug: "brand-activations",
    image: img1,
  },
  {
    id: 2,
    title: "Event Production & Management",
    slug: "event-production",
    image: img2,
    extraImage: img7,
  },
  {
    id: 3,
    title: "Exhibitions, Custom Builds & Spatial Fit-Outs",
    slug: "exhibitions",
    image: img4,
  },
  {
    id: 4,
    title: "Event Logistics & Operations",
    slug: "event-logistics",
    image: img3,
    extraImage: img8,
  },
  {
    id: 5,
    title: "Destination & VIP Experience Management",
    slug: "destination-vip",
    image: img5,
  },
  {
    id: 6,
    title: "Creative Development & Storytelling",
    slug: "creative-development",
    image: img6,
  },
];
