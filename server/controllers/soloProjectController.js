const db = require('../models/soloProjectModels');
const soloProjectController = {};

soloProjectController.createUser = (req, res, next) => {
  const { fn, ln, email, pw } = req.body;
  const insertUser = `INSERT INTO users (fn, ln, email, pw) VALUES ('${fn}', '${ln}', '${email}', '${pw}')`;

  db.query(insertUser)
    .then(data => {
      return next();
    })
    .catch((e) => {
      return next({log: 'createUser failed', message: e.detail});});
  
};

module.exports = soloProjectController;
