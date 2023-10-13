// create an alias called inform to store the console.log function
// When providing user feedback in the terminal use `inform`
// When developing/debugging use `console.log`
const { readJSONFile, writeJSONFile } = require('./src/helpers');
const inform = console.log;
const { create, index, show, destroy, edit, score  } = require('./src/animalController.js');
const albums = readJSONFile("./data", "albums.json");


function run() {
let writeToFile = false;
let updatedAnimals = [];

  const action = process.argv[2];
  const animal = process.argv[3];
  switch (action) {
    case "index":
        const animalsView = index(animals);
        inform(animalsView);
        break;
    case "create":
        updatedAnimals = create(animals, animal);
        writeToFile = true;
        break;
    case "show":
        const animalView = show(animals, animal);
        inform(animalView);
            break;
    case "update":
        updatedAnimals = edit(animals, animal, process.argv[4]);
        writeToFile = true;
        break;
    case "destroy":
        updatedAnimals = destroy(animals, animal);
        writeToFile = true;
        break;
    case "score":
        inform(
            `Current points sum of all animals you've added to your database: ${score(
             animals
              )}`
            );
      break;
    default:
      inform('There was an error.');
  }
if (writeToFile) {
    writeJSONFile('./data', 'animals.json', updatedAnimals);
  }
}

run();








