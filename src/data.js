import commingSoonSrc_1 from "./Assets/comingsoon.gif";
import commingSoonSrc_2 from "./Assets/comingsoon1.gif";
import battleshipsGif from "./Assets/demoGifs/battleships_demo.gif";
import battlshipsSrc from "./Assets/demoGifs/battleships.png";
import findemallSrc from "./Assets/demoGifs/findemall.png";
import findemallGif from "./Assets/demoGifs/findemall_demo.gif";
const data = [
  {
    name: "Battleships",
    liveLink: "https://aminumado.github.io/battleships/",
    repoLink: "https://github.com/AminuMado/battleships",
    photo: battlshipsSrc,
    gif: battleshipsGif,
    skills: ["Html", "Css", "Javascript", "Jest"],
    summary:
      "Take to the high seas and test your luck against the computer in the classic guessing game. This is a single-page application built in vanilla JavaScript using a test-driven development approach via the Jest testing framework. Users place their ships and then take turns guessing locations on the opponent's board. Last one standing (or floating) wins!",
  },
  {
    name: "Find Em All",
    liveLink: "https://aminumado.github.io/photo-tagging-app/",
    repoLink: "https://github.com/AminuMado/photo-tagging-app",
    skills: ["Javascript", "Tailwind", "React", "Firebase"],
    photo: findemallSrc,
    gif: findemallGif,
    summary:
      "A 'Where's Waldo' character finding game, this project was built with React and uses Firebase for a backend database. The game features 3 unique levels and a global leaderboard that updates in realtime.",
  },
  {
    name: "Blog Site",
    liveLink: "#",
    repoLink: "#",
    photo: commingSoonSrc_1,
    gif: commingSoonSrc_2,
    skills: ["React", "NodeJs", "Express", "MongoDB"],
    summary:
      "A platform for creating and managing a blog, built using the MERN stack. User authentication is handled via a simple username & password strategy with password hashing and salting for secure storage. JSON Web Tokens ensure that users remain authenticated as they navigate the site.",
  },
  // {
  //   name: "Members Only",
  //   liveLink: "#",
  //   repoLink: "#",
  //   photo: commingSoonSrc_1,
  //   gif: commingSoonSrc_2,
  //   skills: ["React", "NodeJs", "Express", "MongoDB"],
  //   summary:
  //     "Members Only is a 'clubhouse' type of application in that only members can see what's posted and by who. The goal of this project was to learn about authentication. This application was build with NodeJS, Pug, Express, MongoDB, and Passport.",
  // },
];

export default data;
