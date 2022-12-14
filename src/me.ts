import {
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaNewspaper,
  FaPager,
  FaReact,
  FaNode,
} from "react-icons/fa";
import {
  SiAdobe,
  SiC,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiPython,
  SiCplusplus,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGithub,
  SiGit,
  SiFigma,
  SiTypescript,
  SiCsharp,
  SiCachet,
  SiLinux
} from "react-icons/si";

import { IMe } from "./me.interface";

export const me = {
  about:
    "",
  location: "",
  image: "/assets/CK.jpeg",
  education: [
    {
      degree: "",
      major: "Bachelor's in Computer Science",
      school: "Florida State University",
      graduation: "Expected Graduation: May 2025",
    },
	{
      degree: "",
      major: "Awards: AP Scholar with Distinction, Florida Academic Scholars Scholarship",
      school: "Saint Petersburg High School",
      graduation: "Graduated: May 2021",
    },
  ],
  experience: [
    {
      company: "WJ Partners",
      location: "Spartanburg, SC",
      position: "Full-Stack Developer",
      duration: "Sep 2022 - Present",
      bullets: [
        "Spearheaded the planning of database analysis software to assist in the acquisition of middle market companies in the consumer, specialty finance, industrial, and business services sectors.",
		"Developed back-end database analysis API in Python, with multi-threaded support, for rapid processing of business brokerage data.",
        "Designed and developed a modern user interface with over sixty user filtering methods.",
        "Created multi-OS, 64-bit release, with applied obfuscation methods to ensure security of propietary tools.",
		"Languages/frameworks utilized throughout development: Python, JavaScript, HTML, CSS, SQL."
      ],
    },
  ],
  otherexperience: [
    {
      company: "Florida Holocaust Museum",
      location: "Saint Petersburg, FL",
      position: "Gallery Attendant (Volunteer)",
      duration: "July 2019 - May 2021",
      bullets: [
			"Oversaw the museum's collections to ensure its safety and security.",
			"Greeted visitors and offered guidance, such as exhibit information or directions.",
			"Created personal, handwritten letters for hundreds of highly-valued museum patrons.",
      ],
    },
    {
      company: "400 Beach Seafood & Taphouse",
      location: "Saint Petersburg, FL",
      position: "Lead Server Assistant",
      duration: "June 2019 - July 2021",
      bullets: [
		"Fostered an exceptional dining experience by engaging with patrons and quickly alleviating service conflicts.",
		"Developed excellent interpersonal skills through interacting professionally and efficiently with colleagues, customers, and vendors.",
		"Managed team of server assistants, oversaw their training and onboarding procedures, and resolved their scheduling conflicts.",
      ],
	},
  ],
  projects: [
    {
      name: "Advanced Encryption System with Face ID authorization",
      description:
        "Implemented a text file encryption and decryption tool using the Advanced Encryption Standard (AES) / Rijndael algorithm and user authentication through facial recognition with OpenCV. Supported encryption key lengths of 128, 192, and 256 bits. Utilized webcam input to verify user identity before granting access to decrypted text.",
      contribution:
        "",
      image: "",
      technologies: ["C++", "OpenCV", "AES"],
      links: [
        {
	  name: "Github",
          uri: "https://github.com/nullCKing/Face-ID-AES-256-Bit-Encryption",
        },
      ],
    },
    {
      name: "christianking.info",
      description: "A sleek, personal portfolio website built with React.js, TypeScript, and Chakra UI, with a deployment via Vercel.",
      contribution:
        "",
      technologies: ["React", "Typescript", "Chakra-UI", "Vercel"],
      links: [
        {
          name: "Website",
          uri: "",
        },
      ],
      image: "",
    },
    {
      name: "BraggingPositions [Discord Application]",
      description:
        "A Discord Bot made for tracking users stock and options purchases with a localized ledgering system.",
      contribution:
        "",
      technologies: ["JavaScript", "Node.js", "Discord.js"],
      links: [
        {
          name: "Github",
          uri: "https://github.com/nullCKing/BraggingPositions",
        },
      ],
      image: "",
    },
    {
      name: "Financial CSV Automation Tool & External PyPi Package",
      description: "Automation interface for a variety of Excel CSV creation tasks, intended for financial analysis and algorithmic trading. Generates CSVs containing in-depth financial analyses, day-by-day breakdowns, and more. Alongside is a PyPi package (csvtickerlist) that allows developers to add certain automation functionalities to their projects.",
      contribution:
        "",
      technologies: ["Python", "CSS", "Excel"],
      links: [
        {
          name: "Main Github",
          uri: "https://github.com/nullCKing/Financial-CSV-Automation",
        },
		{
		  name: "PyPi Package Github",
		  uri: "https://github.com/nullCKing/csvtickerlist"
		},
		{
		  name: "Python Package Index",
		  uri: "https://pypi.org/project/csvtickerlist/"
		},
      ],
      image: "",
    },
  ],
  courses: [
    {
      name: "Introduction to C++",
      icon: SiCplusplus,
    },    
	{
      name: "Data Structures, Algorithms and Generic Programming in C++",
      icon: SiCplusplus,
    },   
	{
      name: "Computer Science Special Topics: Programming in C#",
      icon: SiCsharp,
    },    
	{
      name: "Unix Tools",
      icon: SiLinux,
    }, 	
	{
      name: "Computer Organization & Operating Systems",
      icon: SiCachet,
    }, 
  ],
    skills: [
    {
      name: "C++",
      icon: SiCplusplus,
    },    
	{
      name: "Python",
      icon: SiPython,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "React.js",
      icon: FaReact,
    },
	{
      name: "CSharp",
      icon: SiCsharp,
    },
    {
      name: "Git",
      icon: SiGit,
    },
    {
      name: "Github",
      icon: SiGithub,
    },
    {
      name: "Adobe Photoshop",
      icon: SiAdobephotoshop,
    },
	{
      name: "Adobe Illustrator",
      icon: SiAdobeillustrator,
    },
	{
      name: "Figma",
      icon: SiFigma,
    }
  ],
  certifications: [
    {
      name: "Adobe Certified Associate in Visual Design Using Adobe Photoshop",
      icon: SiAdobephotoshop,
    },    
	{
      name: "Adobe Certified Associate in Graphic Design & Illustration Using Adobe Illustrator",
      icon: SiAdobeillustrator,
    },   
	{
      name: "MTA: Introduction to Programming Using JavaScript - Certified 2021",
      icon: SiJavascript,
    },    
	{
      name: "Adobe Certified Professional in Visual Design",
      icon: SiAdobe,
    }, 	
  ],
  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "Christian-King-Resume.pdf",
      hover: {
        bg: "red.500",
        color: "white",
      },
    },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/nullCKing",
      hover: {
        bg: "gray.900",
        color: "white",
      },
    },
  ],

  contact: {
    email: "christiank1inquiries@gmail.com",
  },
} as IMe;
