const { PlaceC } = require('../db/cassandra/model');

const controller = {
  get: (req, res) => {
    console.log(req.query)
    res.status(200).send();
  },
  post: (req, res) => {
    
  }
}

module.exports = controller;