// import images
import { GrMail } from 'react-icons/gr';
import { MdArrowForward, MdCall, MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { TbSmartHome } from 'react-icons/tb';
import { BiUser } from 'react-icons/bi';
import { RiServiceLine, RiProjectorLine } from 'react-icons/ri';
import HeroPerson from './assets/images/Hero/person.png';

import Figma from './assets/images/Skills/figma.png';
import Sketch from './assets/images/Skills/sketch.png';
import Ps from './assets/images/Skills/ps.png';
import Reactjs from './assets/images/Skills/react.png';
import Nodejs from './assets/images/Skills/node.png';
import Python from './assets/images/Skills/python.png';

import ServicesLogo1 from './assets/images/Services/logo1.png';
import ServicesLogo2 from './assets/images/Services/logo2.png';
import ServicesLogo3 from './assets/images/Services/logo3.png';

import Project1 from './assets/images/Projects/img1.png';
import Project2 from './assets/images/Projects/img2.png';
import Project3 from './assets/images/Projects/img3.png';
import PersonProject from './assets/images/Projects/person.png';

import Avatar1 from './assets/images/Testimonials/avatar1.png';
import Avatar2 from './assets/images/Testimonials/avatar2.png';
import Avatar3 from './assets/images/Testimonials/avatar3.png';
import Avatar4 from './assets/images/Testimonials/avatar4.png';

import HiremePerson from './assets/images/Hireme/person.png';
import HiremePerson2 from './assets/images/Hireme/person2.png';

// import icons from react-icons

const content = {
  nav: [
    {
      link: '#home',
      icon: TbSmartHome,
    },
    {
      link: '#skills',
      icon: BiUser,
    },
    {
      link: '#services',
      icon: RiServiceLine,
    },
    {
      link: '#projects',
      icon: RiProjectorLine,
    },
    {
      link: '#contact',
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: 'Web Developer',
    firstName: 'ZIKA',
    lastName: 'ZAKI',
    btnText: 'Hire Me',
    image: HeroPerson,
    hero_content: [
      {
        count: '8+',
        text: 'Years of Experinse in Web development',
      },
      {
        count: '20+',
        text: 'Projects Worked in my career',
      },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'MY TOP SKILLS',
    skills_content: [
      {
        name: 'Figma',
        para: 'Lorem ipsum text  dummy',
        logo: Figma,
      },
      {
        name: 'Node js',
        para: 'Lorem ipsum text  dummy',
        logo: Nodejs,
      },
      {
        name: 'Adobe Photoshop',
        para: 'Lorem ipsum text  dummy',
        logo: Ps,
      },
      {
        name: 'React js',
        para: 'Lorem ipsum text  dummy',
        logo: Reactjs,
      },
      {
        name: 'Sketch',
        para: 'Lorem ipsum text  dummy',
        logo: Sketch,
      },
      {
        name: 'Python',
        para: 'Lorem ipsum text  dummy',
        logo: Python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: 'Services',
    subtitle: 'WHAT I OFFER',
    service_content: [
      {
        title: 'Web Development',
        para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
        logo: ServicesLogo1,
      },
      {
        title: 'ui / ux DESIGNING',
        para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
        logo: ServicesLogo2,
      },
      {
        title: 'PhotoShop Editing',
        para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
        logo: ServicesLogo3,
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'MY CREATION',
    image: PersonProject,
    project_content: [
      {
        title: 'Gym Website',
        image: Project1,
      },
      {
        title: 'Social Media web',
        image: Project2,
      },
      {
        title: 'Creative Website',
        image: Project3,
      },
    ],
  },
  testimonials: {
    title: 'Testimonials',
    subtitle: 'MY CLIENT REVIEWS',
    testimonials_content: [
      {
        review:
          '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: Avatar1,
        name: 'JOHN DOE',
      },
      {
        review:
          '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: Avatar2,
        name: 'Tom Alex',
      },
      {
        review:
          '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: Avatar3,
        name: 'Johnny',
      },
      {
        review:
          '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: Avatar4,
        name: 'ROBBIN',
      },
    ],
  },
  hireme: {
    title: 'Hire Me',
    subtitle: 'FOR YOUR PROJECTS',
    image1: HiremePerson,
    image2: HiremePerson2,
    para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
    btnText: 'Hire Me',
  },
  contact: {
    title: 'Contect Me',
    subtitle: 'GET IN TOUCH',
    social_media: [
      {
        text: 'ziiikoooo2000@gmail.com',
        icon: GrMail,
        link: 'mailto:ziiikoooo2000@gmail.com',
      },
      {
        text: '+967 7730 38525',
        icon: MdCall,
        link: 'https://wa.me/967773038525',
      },
      {
        text: 'ZikaZaki',
        icon: BsInstagram,
        link: 'https://www.instagram.com/zikazaki/',
      },
    ],
  },
  footer: {
    text: 'All © Copy Right Reserved 2023',
  },
};

export default content;
