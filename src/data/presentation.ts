type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "samindev@duck.com",
  title: "Hi, I’m Samin 👋",
  // profile: "/profile.webp",
  description:
    "Hello, I'm a *Data Analyst* passionate about extracting insights from data. I am currently expanding my skills through hands-on *Machine Learning projects* to transition into a Data Scientist or ML Engineer role. Outside of work, I enjoy exploring new AI models and continuously learning.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/saminsjourney",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/Samin-khademi",
    },
    {
      label: "Github",
      link: "https://github.com/0xSamin",
    },
  ],
};

export default presentation;


export default presentation;
