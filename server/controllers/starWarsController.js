const models = require('../models/starWarsModels');
const starWarsController = {};

starWarsController.getCharacters = (req, res, next) => {
  // write code here
  models.Person.find().then(people => {
    res.locals.people = people;
    return next();
  });
};

starWarsController.getSpecies = (req, res, next) => {
  // write code here
  models.Species.findById(req.query.id).then(species => {
    res.locals.species = species;
    return next();
  });
  
};

starWarsController.getHomeworld = (req, res, next) => {
  // write code here
  models.Planet.findById(req.query.id).then(planets => {
    res.locals.planets = planets;
    return next();
  });
};

starWarsController.getFilm = (req, res, next) => {
  // write code here
  models.Film.findById(req.query.id).then(films => {
    res.locals.films = films;
    return next();
  });
};

starWarsController.addCharacter = (req, res, next) => {
  // write code here

  next();
};

module.exports = starWarsController;
