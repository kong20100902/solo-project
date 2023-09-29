const db = require('../models/soloProjectModels');
const Session = require('../models/sessionModels');

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

soloProjectController.getUser = (req, res, next) => {
  const findUser = `SELECT * FROM users WHERE email = '${req.query.email}'`;
  db.query(findUser)
    .then(data => {
      if(!data.rows[0]){
        res.locals.user = 'no user';
      }
      else{
        res.locals.user = data.rows[0];
      }
      return next();
    })
    .catch((e) => {
      return next({log: 'getUser failed', message: e.detail});});
};

soloProjectController.startSession = (req, res, next) => {
  Session.create({cookieId: res.locals.user.userid})
    .then(data => {return next();})
    .catch((e) => {return next();});
};

soloProjectController.hasSession = (req, res, next) => {

  Session.findOne({cookieId: req.cookies.userid}).then(document => {
    if(!document){
      res.locals.user = null;
      return next();
    }
    const findUser = `SELECT * FROM users WHERE userid = '${document.cookieId}'`;

    db.query(findUser)
      .then(data => {
        res.locals.user = data.rows[0];
        return next();
      });
  });
};

soloProjectController.setUseridCookie = (req, res, next) => {
  if(res.locals.user.userid){
    res.cookie('userid', res.locals.user.userid);
  }
    
  return next();
};

soloProjectController.createOrder = (req, res, next) => {
  console.log(req.body);
  const { userid, link, note } = req.body;
  const insertOrder = `INSERT INTO orders (userid, link, note) VALUES ('${userid}', '${link}', '${note}')`;

  db.query(insertOrder)
    .then(data => {
      return next();
    })
    .catch((e) => {
      return next({log: 'createOrder failed', message: e.detail});});
};
module.exports = soloProjectController;
