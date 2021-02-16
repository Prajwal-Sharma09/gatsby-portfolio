import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Prajwal  Sharma', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Prajwal Sharma.',
  subtitle: 'I am a Web Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'My name is Prajwal Sharma. I am 23 yrs old Web Developer. I am highly passionate developer who loves coding, software engineering and the web platform. ',
  paragraphTwo:
    "I've proficient understanding of front-end technologies, including HTML5, CSS3, JavaScript with strong proficiency in JavaScript ES6, including DOM manipulation and the JavaScript object model. I've good understanding of React.js, React Hooks, State Management and it's ecosystem along with experience building user interfaces for websites and web applications. I'm familiar with RESTful APIs along with SQL and NoSQL databases. I've knowledge of code versioning tools, such as Git and also have basic understanding with popular React.js workflows with Redux.",
  paragraphThree:
    'Apart from coding and web development, I love Football, Snooker and Trekking and other fun extra curricular activities.',
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pwgenerator.png',
    title: 'Password Generator',
    info: 'A simple password generator using HTML/CSS and JS',

    url: 'https://password-generator-site.netlify.app/',
    repo: 'https://github.com/Prajwal-Sharma09/Password-Generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'breakout.PNG',
    title: 'Breakout Game',
    info: 'A simple game build using HTML5 canvas,CSS and JS.',

    url: 'https://breakout-game-app.netlify.app/',
    repo: 'https://github.com/Prajwal-Sharma09/breakout-game', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cart.PNG',
    title: 'JS Shopping Cart',
    info: 'JavaScript app to add functionality to a shopping cart.',

    url: 'https://js-shopping-cart-app.netlify.app/',
    repo: 'https://github.com/Prajwal-Sharma09/js-shopping-cart', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'flashcard.PNG',
    title: 'React Flashcard',
    info: 'A simple React Flashcard application',
    info2: '',
    url: 'https://flashcard-react.netlify.app/',
    repo: 'https://github.com/Prajwal-Sharma09/react-flashcard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'syangjasandesh.PNG',
    title: 'Syangja Sandesh',
    info: 'News portal for our personal business build with wordpress.',

    url: 'https://syangjasandesh.com/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'prajwalsharmawqu09@gmail.com',
  btn: 'PING ME!',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/prajwal.sharma.750/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/prajwal_sharma09/?hl=en',
    },

    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Prajwal-Sharma09',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
