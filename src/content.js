import LogoGithub from './images/logo-github';
import LogoInstagram from './images/logo-instagram';
import LogoDribbble from './images/logo-dribbble';
import LogoCodepen from './images/logo-codepen';
import LogoLinkedin from './images/logo-linkedin';
import IconResume from "./images/icon-resume";

export const strengthsData = [
  {
    strength: 'Ideation',
    description:
      'People who are especially talented in the Ideation theme are fascinated by ideas. They are able to find connections between seemingly disparate phenomena.'
  },
  {
    strength: 'Relator',
    description:
      'People who are especially talented in the Relator theme enjoy close relationships with others. They find deep satisfaction in working hard with friends to achieve a goal.'
  },
  {
    strength: 'Empathy',
    description:
      'People who are especially talented in the Empathy theme can sense the feelings of other people by imagining themselves in others’ lives or others’ situations.'
  },
  {
    strength: 'Achiever',
    description:
      'People who are especially talented in the Achiever theme have a great deal of stamina and work hard. They take great satisfaction from being busy and productive.'
  },
  {
    strength: 'Intellection',
    description:
      'People who are especially talented in the Intellection theme are characterized by their intellectual activity. They are introspective and appreciate intellectual discussions.'
  }
];

export const aboutData = {
  aboutStatement: {
    headline: 'Drawing from a strong background in design, I build engaging user focused experiences from initial concept to final deployment.',
  },
  aboutStory: {
    headline: 'My Road to Code',
    body: [
      'I spent nearly ten years working in the creative industry as a visual designer but always had the itch to bring my work to life. I wanted to build things that people could use and interact with.',
      `I dabbled in code here and there but finally decided to go for it in 2016 and become a web/software developer. I never looked back, pouring myself into it daily. I'm always excited for what I’ll build/learn next.`,
    ],
  },
  aboutStrengths: {
    headline: `Strengths - Gallup's StrengthsFinder`,
    strengthsData,
  }
}

export const workData = [
  {
    name: 'Resume',
    text: 'Highlighted projects, accomplishments, work experience, etc.',
    url: 'https://zremboldt.netlify.app/',
    icon: IconResume
  },
  {
    name: 'GitHub',
    text: 'Most of my more involved projects and ideas can be found here.',
    url: 'https://github.com/zremboldt',
    icon: LogoGithub
  },
  {
    name: 'Codepen',
    text:
      'This is the coding laboratory where some of my fun experiments live.',
    url: 'https://codepen.io/zremboldt',
    icon: LogoCodepen
  }
];

export const socialData = [
  {
    label: "Dribbble",
    href: "https://dribbble.com/RemboldtDesign",
    icon: LogoDribbble
  },
  {
    label: "CodePen",
    href: "https://codepen.io/zremboldt/",
    icon: LogoCodepen
  },
  {
    label: "GitHub",
    href: "https://github.com/zremboldt",
    icon: LogoGithub
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zremboldt/",
    icon: LogoInstagram
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zac-remboldt/",
    icon: LogoLinkedin
  },
];
