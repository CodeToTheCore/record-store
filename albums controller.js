const { nanoid } = require('nanoid');
const albumPoints = require('../data/albumPoints.json');

const create = (albums, albumName) => {
    const album = {
      name: albumName,
      id: nanoid(4),
      points: albumPoints[albumName] || 10 // if the album you create does not exist in the resource object of animals, it will be given a default points value of 10
    };
    animals.push(animal);
    return animals;
  }

  function index(animals) {
    return animals.map((animal) => animal.id + ' ' + animal.name).join('\n');
  }

  function show(animals, animalId) {
    const animal = animals.find((animal) => animal.id === animalId);
    return animal.id + ' ' + animal.name + ' ' + animal.points + ' points';
  }

  const inform = console.log;

function destroy(animals, animalId) {
  const index = animals.findIndex((animal) => animal.id === animalId);
  if (index > -1) {
    animals.splice(index, 1);
    inform('Animal successfully removed from collection');
    return animals;
  } else {
    inform('Animal not found. No action taken');
    return animals;
  }
}

function edit(animals, animalId, updatedAnimal) {
    const index = animals.findIndex((animal) => animal.id === animalId);
    if (index > -1) {
      animals[index].id = animalId;
      animals[index].name = updatedAnimal;
      animals[index].points = animalPoints[updatedAnimal] || 10;
      inform('Animal successfully updated');
      return animals;
    } else {
      inform('Animal not found. No action taken');
      return animals;
    }
  }

  function score(animals) {
    return animals.reduce((acc, current) => acc + current.points, 0);
  }

  module.exports = { 
    create,
    index,
    show,
    destroy,
    edit,
    score
 }