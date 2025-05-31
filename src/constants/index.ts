import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  motion,
  face, csharp1,
  vision,
  ui,
  wp,
  apd,
  python,
  c,
  linux,
  wordpress,
  gits,
  figma,
  mongodb,
  tailwind,
  git,
  blender,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work & Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Computer Vision Developer (OpenCV)",
    icon: backend,
  },
  {
    title: "WordPress Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Github",
    icon: gits,
  },
  {
    name: "Mango Db",
    icon: mongodb,
  },

  {
    name: "GIT",
    icon: git,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Linux",
    icon: linux,
  },
];

const experiences: TExperience[] = [
  {
    title: "Intern – Vision-Based Systems",
    companyName: "Macs Info Solution",
    icon: vision, // Replace with your custom icon if needed
    iconBg: "#383E56",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Worked with OpenCV to build and test image processing pipelines.",
      "Explored motion detection and face recognition for security applications.",
      "Collaborated on real-time embedded vision projects using ESP32-CAM.",
    ],
  },
  {
    title: "Frontend Intern – UI/UX Design",
    companyName: "TVS",
    icon: ui, // Replace with a more fitting icon if available
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Jul 2023",
    points: [
      "Created interactive UI mockups using Figma aligned with brand requirements.",
      "Assisted in implementing front-end designs using HTML and CSS.",
      "Worked with designers and developers to align user experience goals.",
    ],
  },
  {
    title: "Web Developer Intern",
    companyName: "Bolsius India",
    icon: wp, // Placeholder icon; replace with real one
    iconBg: "#383E56",
    date: "Jun 2024 - Jul 2024",
    points: [
      "Developed a fully functional WordPress website for product showcase.",
      "Optimized layout and navigation for user engagement and accessibility.",
      "Integrated visual design components to align with brand identity.",
    ],
  },
  {
    title: "Academic Project Developer",
    companyName: "R.M.K Engineering College",
    icon: apd, // Placeholder icon; replace as needed
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Present",
    points: [
      "Built multiple real-world projects including a Face Lock System using Python & OpenCV.",
      "Developed a client management tool with C# and MongoDB.",
      "Designed motion-sensing night light automation using ESP32-CAM and PIR sensors.",
    ],
  },
];


const testimonials: TTestimonial[] = [
  {
    testimonial:
        "Studied core concepts in Electronics and Communication Engineering. Built real-time projects using Python, OpenCV, and microcontrollers. CGPA: 8.36.",
    name: "R.M.K Engineering College",
    designation: "B.E. – Electronics and Communication Engineering",
    company: "Anna University",

  },
  {
    testimonial:
        "Focused on Physics, Chemistry, Mathematics and Computer science. Developed strong analytical and problem-solving skills. Secured 82% in Higher Secondary Certification.",
    name: "SVISSS, Erode",
    designation: "HSC",
    company: "CBSE",

  },
  {
    testimonial:
        "Completed foundational academic training with a focus on core subjects. Actively participated in Scouts and earned the Rajya Puraskar Award. Secured 87% in SSC.",
    name: "SVISSS, Erode",
    designation: "SSLC",
    company: "CBSE",
  },
];

const projects: TProject[] = [
  {
    name: "Motion-Detecting Night Light",
    description:
        "An IoT automation system using ESP32-CAM and a PIR sensor to detect motion at night. Based on user-selected mode, it either captures images or activates a light. A Telegram bot sends real-time alerts and snapshots to enhance remote monitoring and home security.",
    tags: [
      { name: "esp32-cam", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "iot", color: "pink-text-gradient" },
    ],
    image: motion,
    sourceCodeLink: "https://github.com/aathithya-27/Motion-detection-night-light-with-ESP-32",
  },
  {
    name: "Client Contact Management Tool",
    description:
        "A desktop application built using C# and MongoDB to efficiently manage and store client contact details. It features a clean, responsive interface for easy data entry and retrieval, boosting productivity and streamlining record keeping.",
    tags: [
      { name: "c#", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "desktopapp", color: "pink-text-gradient" },
    ],
    image: csharp1,
    sourceCodeLink: "https://github.com/aathithya-27/Client-Contact-Managment-Tool",
  },
  {
    name: "Bike Face Lock System",
    description:
        "A face recognition-based bike locking system using facial landmarks and anti-spoofing techniques. Trained on owner-specific data to ensure secure, contactless access and prevent unauthorized use through image-based attacks.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "ML", color: "pink-text-gradient" },
    ],
    image: face,
    sourceCodeLink: "https://github.com/aathithya-27/facemesh",
  },
];

export { services, technologies, experiences, testimonials, projects };
