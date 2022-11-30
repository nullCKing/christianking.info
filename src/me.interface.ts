import { IconType } from "react-icons";

export interface IMe {
  name: string;
  subtitle: string;
  tagline: string;
  about: string;
  location: string;
  image: string;
  education: IEducation[];
  experience: IExperience[];
  otherexperience: oExperience[];
  projects: IProject[];
  skills: ISkill[];
  certifications: ICertifications[];
  courses: ICourse[];
  social: ISocial[];
  contact: IContact;
}

interface IEducation {
  degree: string;
  major: string;
  school: string;
  graduation: string;
}

interface IProject {
  name: string;
  description: string;
  contribution: string;
  technologies: string[];
  links: ILink[];
  image: string;
}


interface IExperience {
  company: string;
  location: string;
  position: string;
  duration: string;
  bullets: string[];
}

interface oExperience {
  company: string;
  location: string;
  position: string;
  duration: string;
  bullets: string[];
}

interface ISkill {
  name: string;
  icon: IconType;
}

interface ICertifications {
  name: string;
  icon: IconType;
}

interface ICourse {
  name: string;
  icon: IconType;
}

interface ISocial {
  name: string;
  icon: IconType;
  uri: string;
  hover: {
    color: string;
    bg: string;
  };
}

interface IContact {
  email: string;
}

interface ILink {
  name: string;
  uri: string;
}
