import projectImage1 from "@/public/images/projects-image1.jpg";
// import projectImage2 from "@/public/images/projects-image2.jpg";
import projectImage3 from "@/public/images/projects-image3.jpg";
import projectImage4 from "@/public/images/projects-image4.jpg";
import projectImage5 from "@/public/images/projects-image5.jpg";
import projectImage6 from "@/public/images/projects-image6.jpg";

export const servicesPageData = {
  exhibitions: {
    title: "Exhibitions & Trade Shows",
    services: [
      {
        title: "Booth Design & Set up",
        description:
          "We create eye-catching, custom booth designs that make your brand stand out. From concept to setup, we ensure your booth captures attention and delivers a memorable experience, driving engagement and leaving a lasting impact.",
        imageSrc: projectImage1,
        href: "/projects/#exhibitions&tradeshows",
      },
      {
        title: "Logistics Management",
        description:
          "We manage all logistical aspects of your event, ensuring smooth operations and timely deliveries.",
        imageSrc: projectImage1,
        href: "/projects/#exhibitions&tradeshows",
      },
      {
        title: "On-site Coordination",
        description:
          "Our experienced team ensures everything runs smoothly on the event day, from setup to teardown.",
        imageSrc: projectImage1,
        href: "/projects/#exhibitions&tradeshows",
      },
    ],
    images: [{ src: projectImage1 }],
  },
  privateEvents: {
    title: "Private Events",
    images: [{ src: projectImage3 }, { src: projectImage4 }],
  },
  creativeServices: {
    title: "Creative Services",
    images: [{ src: projectImage6 }, { src: projectImage5 }],
  },
  audioVisual: {
    title: "Audio Visual",
    images: [{ src: projectImage6 }],
  },
};
