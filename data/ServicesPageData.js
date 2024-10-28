import projectImage1 from "@/public/images/projects-image1.jpg";
import projectImage2 from "@/public/images/projects-image2.jpg";
import projectImage3 from "@/public/images/projects-image3.jpg";
import projectImage4 from "@/public/images/projects-image4.jpg";
import projectImage5 from "@/public/images/projects-image5.jpg";
import projectImage6 from "@/public/images/projects-image6.jpg";

export const servicesPageData = {
  aboutUs: [
    {
      title: "Our Mission",
      description: "Mission description",
      stylesClass: "missionStyle",
    },
    {
      title: "Our Vision",
      description: "Vision description",
      stylesClass: "visionStyle",
    },
    {
      title: "Our Team",
      description: "Team description",
      stylesClass: "teamStyle",
    },
  ],
  exhibitions: {
    title: "Exhibitions & Trade Shows",
    services: [
      {
        title: "Booth Design & Set up",
        description:
          "We create eye-catching, custom booth designs that make your brand stand out. From concept to setup, we ensure your booth captures attention and delivers a memorable experience, driving engagement and leaving a lasting impact.",
        imageSrc: projectImage6,
        href: "/projects/#exhibitions&tradeshows",
      },
      {
        title: "Logistics Management",
        description:
          "We manage all logistical aspects of your event, ensuring smooth operations and timely deliveries.",
        imageSrc: projectImage6,
        href: "/projects/#exhibitions&tradeshows",
      },
      {
        title: "On-site Coordination",
        description:
          "Our experienced team ensures everything runs smoothly on the event day, from setup to teardown.",
        imageSrc: projectImage6,
        href: "/projects/#exhibitions&tradeshows",
      },
    ],
  },
  privateEvents: {
    title: "Private Events",
    images: [{ src: projectImage3 }, { src: projectImage4 }],
  },
  creativeServices: {
    title: "Creative Services",
    services: [
      {
        title: "Event Concept & Design",
        description:
          "From corporate galas to weddings and private celebrations, our expert team brings your vision to life with unique themes, stunning visuals, and immersive environments. We focus on every detail—from decor to lighting—ensuring your event is extraordinary and leaves a lasting impression.",
        imageSrc: projectImage3,
      },
      {
        title: "Thematic Decor",
        description:
          "We create themed, customizable decorations that enhance your event’s atmosphere and captivate your guests. Our expert team ensures every detail, from decor to lighting, transforms your vision into an extraordinary and memorable experience.",
        imageSrc: projectImage4,
      },
      {
        title: "Entertainment Planning",
        description:
          "Our team delivers a dynamic lineup of performers, musicians, and interactive acts, perfectly matched to your theme and audience. From live bands to unique specialty acts, we deliver engaging entertainment that keeps energy levels high and leaves your guests talking long after the event.",
        imageSrc: projectImage2,
      },
    ],
  },
  audioVisual: {
    title: "Audio & Visual Services",
    images: [
      { src: projectImage6 },
      { src: projectImage1 },
      { src: projectImage3 },
    ],
  },
  otherServices: {
    title: "Other Services",
    services: [
      {
        title: "Business Set up",
        list: [
          "company formation",
          "regulatory compliance",
          "office space solutions",
        ],
        stylesClass: "businessSetupStyle",
      },
      {
        title: "Logistics & forwarding",
        list: [
          "supply chain management",
          "transportation services",
          "warehouse solutions",
        ],
        stylesClass: "logisticsStyle",
      },
      {
        title: "Business Consulting",
        list: [
          "strategy development",
          "market analysis",
          "process improvement",
        ],
        stylesClass: "consultingStyle",
      },
      {
        title: "Business Management",
        list: [
          "operations management",
          "financial planning",
          "human resources",
        ],
        stylesClass: "managementStyle",
      },
    ],
  },
};
