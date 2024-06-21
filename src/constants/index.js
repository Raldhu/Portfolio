import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated web and software developer passionate about crafting clean and efficient solutions. I have hands-on experience on languages like HTML, CSS, JavaScript, C/C++, SQL and PostgreSQl. I have honed my skills in technologies like React, Redux, Tailwin CSS and Node.js. With expertise in frontend and backend technologies, I thrive on translating complex ideas into user-friendly applications. From designing intuitive interfaces to optimizing backend architectures, I'm committed to delivering robust software that meets both user needs and business goals.`;

export const ABOUT_TEXT = ` Hello! I'm Yatin, a versatile web and software developer. My journey into coding began with a fascination for building functional and aesthetically pleasing websites. Over the years, I've honed my skills in languages like JavaScript, C++ and SQL, alongside frameworks such as React, Redux, and Node.js.

I thrive on solving complex problems and am passionate about creating seamless user experiences. Whether it's designing responsive interfaces or optimizing database structures, I approach each project with meticulous attention to detail and a focus on scalability and performance.

Beyond coding, I value collaboration and continuous learning. I enjoy staying updated with industry trends and technologies to incorporate the latest innovations into my work. My goal is to leverage my expertise to contribute to impactful projects that make a difference.

Let's connect and discuss how we can bring your ideas to life with innovative and efficient solutions!`;

export const EXPERIENCES = [
  {
    year: "May,2023 - July,2024",
    role: "Quantitative Analyst Intern",
    company: "Futures First",
    description: ["Leveraged Python and Excel to develop and implement strategic trading models, enhancing financial analysis and decision making processes for US Treasury Market.",
"Gained valuable financial expertise while contributing to the design and optimization of trading strategies, honing skills in quantitative analysis and risk assessment.",
"Worked on some complex interest rate models and back tested them to improve trading signals"],
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const EDUCATION = [
  {
    year: "2020 - 2024",
    role: "Bachelor Of Technology In Electrical Engineering",
    company: "IIT ROPAR",
    description: `IIT Ropar has done a spelendid job by inculcating the ability in me to learn and build strong foundational knowledge provided by them. "To accomplish great things, we must not only act, but also dream, not only plan, but also believe."- This quote tells a lot about what I have learned at my college. I have become more independent and better disciplined for the world.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2020",
    role: "Senior Secondary",
    company: "RPS Public School, Rewari",
    description: `Completed My high schooling from RPS, Rewari. This institution assisted me in developing a solid foundation in physics, chemistry, and mathematics, all of which were crucial for my JEE preparation. My favourite subject, mathematics, helped me sharpen my logical reasoning and critical thinking. Also, I secured 94.4% in my CBSE 12th Class examination.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2018",
    role: "Secondary",
    company: "RPS Public School, Rewari",
    description: `Completed My high schooling from RPS, Rewari. It was the first stepping stone in my life wherein I learnt a lot more than just rote learning. Developing hobbies, refining them, learning basic etiquettes, getting skilled at multi tasking, developing social skills were some of the many things that my school equipped me with. Sports and cultural activities were always a part of our lives and helped us get molded into lively person. Also, I secured 94.4% in my CBSE 10th Class examination.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  
];

export const PROJECTS = [
  {
    title: "Cryptonance",
    image: project1,
    description:["Provides real-time data on 100 cryptocurrencies, including price, market cap, and daily changes.",
      "Detailed statistics on XRP, including base/quote currency, rank, volume, markets, and supply.",
      "Optimized for smartphones, ensuring a smooth user experience.",
      "Built with JavaScript, Redux Toolkit for state management, and Ant Design for a sleek UI.",
      "Utilizes Chart.js for dynamic cryptocurrency historical data charts, with data fetched from RapidAPI."],
    technologies: ["JavaScript", "React", "Redux", "RapidAPI", "Chart.js"],
  },
  {
    title: "EtherAngel - A CrowdFunding Platform",
    image: project2,
    description:[
      "Developed Ethereum blockchain-based crowdfunding platform using Thirdweb and Metamask integration on the Sepolia Test Network.",
      "Wrote Smart Contracts in Solidity using the Hardhat framework for enhanced security.",
      "This app enables the users to create, view, and donate to blockchain-based crowdfunding campaigns, ensuring direct and transparent participation.",
    ],
    technologies: ["React", "Tailwind CSS", "Solidity"],
  },
  {
    title: "Restaurant Website",
    image: project3,
    description:[
      "An UI/UX restaurant website using ReactJS, CSS BEM methodology, and Figma for design inspiration.",
      "Designed and implemented five sections - Home, About, Menu, Awards, and Contact - ensuring an intuitive user experience.",
      "Developed a login feature enabling users to book tables, enhancing the restaurant’s online reservation capabilities.",
      "Ensured seamless access across various devices, optimizing the website for mobile phones and tablets.",
      "Leveraged ReactJS for interactive functionality, CSS BEM for maintainable and organized styling, and Figma for design prototyping, resulting in an engaging and accessible restaurant website.",
    ],
    technologies: ["React", "CSS BEM", "Figma"],
  },
  {
    title: "Memory Game",
    image: project4,
    description:[
      "Created a visually appealing and responsive game board with card flipping and matching functionality.", 
      "Implemented a timer and scoring system to add challenge and track player progress.",
      "Utilized CSS animations for enhanced user experience, tested and optimized game for functionality and user feedback",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Sector-4, Rewari, Haryana ",
  phoneNo: "+91 89011 84441 ",
  email: "yadavyatin4@gmail.com",
};
