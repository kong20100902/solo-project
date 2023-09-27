const { Pool } = require('pg');

const pool = new Pool({
  user: 'kong20100902',
  host: '127.0.0.1',
  database: 'solo_project',
  password: '0706aceACE',
  port: 5432,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('EXECUTED QUERY', text);
    return pool.query(text, params, callback);
  }
};