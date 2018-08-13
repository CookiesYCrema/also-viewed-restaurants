const connection = require('./');
const Sequelize = require('sequelize');

const Place = connection.define('place', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reviews: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  mainCategory: {
    type: Sequelize.STRING,
    allowNull: false
  },
  subCategories: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {timestamps: false});

// force: true will drop the table if it already exists
connection.sync({force: false})
.then(() => {console.log('Tables created in Postgres!')})
.catch(error => { console.error('Error creating tables:', error)});

module.exports = { Place };
