const express = require('express');
const path = require('path');

const starWarsController = require('../controllers/starWarsController');

const router = express.Router();

router.get('/',
  (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../../index.html'))
);

router.get('/species',
  starWarsController.getSpecies,
  (req, res) => res.status(200).json(res.locals.species)
);

router.get('/homeworld',
  starWarsController.getHomeworld,
  (req, res) => res.status(200).json(res.locals.planets)
);

router.get('/film',
  starWarsController.getFilm,
  (req, res) => res.status(200).json(res.locals.films)
);

router.post('/character',
  starWarsController.addCharacter,
  (req, res) => res.status(200).json({})
);

module.exports = router;
