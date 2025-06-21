import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";

// export const HERO_CONTENT = `I am a dedicated software engineer passionate about crafting clean and efficient solutions. I have hands-on experience on languages like HTML, CSS, JavaScript, C/C++, SQL and PostgreSQl. I have honed my skills in technologies like React, Redux, Tailwin CSS and Node.js. With expertise in frontend and backend technologies, I thrive on translating complex ideas into user-friendly applications. From designing intuitive interfaces to optimizing backend architectures, I'm committed to delivering robust software that meets both user needs and business goals.`;
export const HERO_CONTENT = `I am a dedicated software engineer passionate about crafting clean and efficient solutions with a current focus on Android app development. Over the past year, I’ve been building robust and user-centric mobile applications using Java and Kotlin in native Android. My experience spans across technologies like React, Redux, Tailwind CSS, and Node.js, along with proficiency in HTML, CSS, JavaScript, C/C++, SQL, and PostgreSQL. Whether it's crafting intuitive mobile interfaces or optimizing backend systems, I strive to deliver seamless, scalable, and impactful solutions that align with both user expectations and business goals.`;

export const ABOUT_TEXT = ` Hello! I'm Yatin, a versatile software engineer. My journey into coding began with a fascination for building functional and aesthetically pleasing websites. Over the years, I've honed my skills in languages like Java, Kotlin, JavaScript, C++ and SQL, alongside frameworks such as React, Redux, and Node.js.

I thrive on solving complex problems and am passionate about creating seamless user experiences. Whether it's designing responsive interfaces or optimizing database structures, I approach each project with meticulous attention to detail and a focus on scalability and performance.

Beyond coding, I value collaboration and continuous learning. I enjoy staying updated with industry trends and technologies to incorporate the latest innovations into my work. My goal is to leverage my expertise to contribute to impactful projects that make a difference.

Let's connect and discuss how we can bring your ideas to life with innovative and efficient solutions!`;

export const EXPERIENCES = [
  {
    year: "August,2024 - Present",
    role: "Android Developer",
    company: "AppSmartz",
    projects: [
      {
        name: "DramaFlix (OTT App)",
        description: [
          "Built a dynamic OTT app with Reels/Shorts-style video swiping using an ExoPlayer pool inside a RecyclerView for optimal performance.",
          "Implemented a custom LayoutManager to create a rotating in/out carousel effect for video transitions.",
          "Integrated Room Database for local data persistence and offline support.",
          "Enabled App Linking, In-App Purchases (IAP), and social login functionality (Google, Facebook).",
          "Implemented sticky tab layout with ViewPager2 for seamless content navigation.",
          "Integrated Native and Rewarded Ads for monetization using AdMob.",
          "Set up Firebase push notifications for real-time user engagement.",
        ],
      },
      {
        name: "Radio FM Automotive",
        description: [
          "Worked on an Android Automotive OS media app, fixing critical bugs and enhancing feature stability.",
          "Migrated video playback from VXG player to ExoPlayer for improved performance and reliability.",
          "Enhanced metadata handling for podcasts and radio stations to improve OS-driven UI rendering.",
          "Handled real-time list updates using `onNotifyChildrenChanged()` to ensure favorite stations updated instantly without needing to switch tabs.",
          "Resolved API issues, improving login, favorites syncing, and playback history tracking.",
          "Improved notification handling and addressed various network instability scenarios.",
        ],
      },
      {
        name: "unMix Offline",
        description: [
          "Developed an offline music separation app using TensorFlow and later migrated to PyTorch for better speed and reduced memory footprint.",
          "Built the app from scratch in Kotlin, integrating ExoPlayer for smooth media playback.",
          "Implemented on-device vocal/instrument separation with interactive volume controls.",
          "Enabled background playback with audio focus management for uninterrupted media experience.",
        ],
      },
      {
        name: "Screen Recorder",
        description: [
          "Created a native Android screen recording app with support for both internal and external audio.",
          "Utilized MediaProjection and MediaMuxer APIs for seamless audio-video recording.",
          "Integrated user-selectable audio input options (device audio or microphone).",
        ],
      },
    ],
  },
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
    title: "We-Chat",
    image: project5,
    description: [
      "Developed We-Chat using the MERN stack (MongoDB, Express.js, React.js, Node.js), with a responsive UI built with Chakra UI.",
      "Implemented user authentication with JWT and bcrypt, including a secure logout feature.",
      "Added user search functionality to find and add users to chats directly from the database.",
      "Enabled group chat creation and management where the creator becomes the admin, with options to update group names, add/remove users, and allow users to leave the group.",
      "Utilized Socket.io for real-time messaging and notifications, ensuring instant communication and real-time updates for message recipients.",
    ],
    technologies: [
      "JavaScript",
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "ChakraUI",
      "Socket.io",
    ],
    downloadLink: "https://we-chat-tdyc.onrender.com/",
  },
  {
    title: "Cryptonance",
    image: project1,
    description: [
      "Provides real-time data on 100 cryptocurrencies, including price, market cap, and daily changes.",
      "Detailed statistics on XRP, including base/quote currency, rank, volume, markets, and supply.",
      "Optimized for smartphones, ensuring a smooth user experience.",
      "Built with JavaScript, Redux Toolkit for state management, and Ant Design for a sleek UI.",
      "Utilizes Chart.js for dynamic cryptocurrency historical data charts, with data fetched from RapidAPI.",
    ],
    technologies: ["JavaScript", "React", "Redux", "RapidAPI", "Chart.js"],
    downloadLink: "https://cryptonance1.netlify.app/",
  },
  {
    title: "EtherAngel - A CrowdFunding Platform",
    image: project2,
    description: [
      "Developed Ethereum blockchain-based crowdfunding platform using Thirdweb and Metamask integration on the Sepolia Test Network.",
      "Wrote Smart Contracts in Solidity using the Hardhat framework for enhanced security.",
      "This app enables the users to create, view, and donate to blockchain-based crowdfunding campaigns, ensuring direct and transparent participation.",
    ],
    technologies: ["React", "Tailwind CSS", "Solidity"],
    downloadLink: "https://etherangel.netlify.app/",
  },
  {
    title: "Restaurant Website",
    image: project3,
    description: [
      "An UI/UX restaurant website using ReactJS, CSS BEM methodology, and Figma for design inspiration.",
      "Designed and implemented five sections - Home, About, Menu, Awards, and Contact - ensuring an intuitive user experience.",
      "Developed a login feature enabling users to book tables, enhancing the restaurant’s online reservation capabilities.",
      "Ensured seamless access across various devices, optimizing the website for mobile phones and tablets.",
      "Leveraged ReactJS for interactive functionality, CSS BEM for maintainable and organized styling, and Figma for design prototyping, resulting in an engaging and accessible restaurant website.",
    ],
    technologies: ["React", "CSS BEM", "Figma"],
    downloadLink: "https://restaurant34.netlify.app/",
  },
  {
    title: "Memory Game",
    image: project4,
    description: [
      "Created a visually appealing and responsive game board with card flipping and matching functionality.",
      "Implemented a timer and scoring system to add challenge and track player progress.",
      "Utilized CSS animations for enhanced user experience, tested and optimized game for functionality and user feedback",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    downloadLink: "https://memorygame-yatin.netlify.app/",
  },
];

export const CONTACT = {
  address: "Sector-4, Rewari, Haryana ",
  phoneNo: "+91 89011 84441 ",
  email: "yadavyatin4@gmail.com",
};
