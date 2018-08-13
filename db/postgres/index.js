const Sequelize = require('sequelize');

const connection = new Sequelize('alsoviewed', 'mario', 'bar', {
  // host: 'localhost',
  dialect: 'postgres',
  logging: false
});

connection.authenticate()
  .then(() => {
    console.log('Connection to postgress db has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = connection;