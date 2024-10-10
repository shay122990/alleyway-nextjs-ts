import projectImage1 from "@/public/images/projects-image1.jpg";
import projectImage2 from "@/public/images/projects-image2.jpg";
import projectImage3 from "@/public/images/projects-image3.jpg";
import projectImage4 from "@/public/images/projects-image4.jpg";
import projectImage5 from "@/public/images/projects-image5.jpg";
import projectImage6 from "@/public/images/projects-image6.jpg";

export const homePageData = {
  exhibitions: {
    title: "Exhibitions & Trade Shows",
    images: [{ src: projectImage1, width: 4569, height: 3046 }],
    links: [
      { name: "Booth Design & Set Up", href: "/services#exhibitions" },
      { name: "Logistics Management", href: "/services#exhibitions" },
      { name: "On-site Coordination", href: "/services#exhibitions" },
    ],
  },
  privateEvents: {
    title: "Private Events",
    images: [
      { src: projectImage2, width: 4480, height: 6720 },
      { src: projectImage3, width: 2912, height: 4368 },
    ],
    links: [
      { name: "Anniversary", href: "/services/private-events" },
      { name: "Birthday Parties", href: "/services#private-events" },
      { name: "Weddings", href: "/services#private-events" },
      { name: "Social Events", href: "/services#private-events" },
    ],
  },
  creativeServices: {
    title: "Creative Services",
    images: [
      { src: projectImage4, width: 4016, height: 6016 },
      { src: projectImage5, width: 5472, height: 3648 },
    ],
    links: [
      { name: "Event Concept & Design", href: "/services#creative-services" },
      { name: "Thematic Decor", href: "/services#creative-services" },
      { name: "Entertainment Planning", href: "/services#creative-services" },
    ],
  },
  audioVisual: {
    title: "Audio Visual",
    images: [{ src: projectImage6, width: 5000, height: 6720 }],
    links: [
      { name: "Sound Systems", href: "/services#audio-visual" },
      { name: "Lighting Design", href: "/services#audio-visual" },
      { name: "LED Screens", href: "/services#audio-visual" },
      { name: "Technical Support", href: "/services#audio-visual" },
    ],
  },
};