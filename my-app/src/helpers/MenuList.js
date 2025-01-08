import Connect from "../assets/ConnectFour.jpeg";
import Sudoku from "../assets/Sudoku.jpeg";
import Weather from "../assets/Weather.jpg";
import MicrosoftAzure from "../assets/MicrosoftAzureCert.jpeg"


export const MenuList = [
  {
    name: "Connect 4",
    image: Connect,
    description: "This project enables usage of the minimax depth-limited algorithm, which creates a search tree based on the state of the current board further exploring all possible moves that could be made. This process is repeated 5 times (in-depth), from which it will decide the best move to make.",
  },
  {
    name: "Sudoku Solver",
    image: Sudoku,
    description: "Multiple different algorithms were used to help determine the best working algorithm that can output the fastest results and solve the Sudoku board. The AC3 and backtracking algorithm were the primary subjects that were used to help accomplish these goals.",
  },
  {
    name: "Weather Application",
    image: Weather,
    description: "This is an extremely simple yet effective application that uses an API key and simple programming language to help determine the weather and it's aspects in the desired locations.",
  },

  {
    name: "Microsoft Azure Certificate",
    image: MicrosoftAzure,
    description: "Usable certificate that helps provide proficiency in different concepts such as cloud computing, and handling applications/services on the Azure platform.",
  },

];