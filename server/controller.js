// const db = require('../db/postgres/')
const { Place } = require('../db/postgres/model');
const { PlaceC } = require('../db/cassandra/model');

const controller = {
  get: (req, res) => {
    console.log(req.query)
    res.status(200).send();
  },
  post: (req, res) => {
    Place.create({
      name: req.body.name,
      reviews: req.body.reviews,
      rating: req.body.rating,
      price: req.body.price,
      mainCategory: req.body.mainCategory,
      subCategory: req.body.subCategory,
      city: req.body.city,
      image: req.body.image
    })
    .then((place) => {
      console.log('Creating place:', place)
      res.status(201).send(place);
    })
    .catch(error => {
      console.error('Error creating place', error);
      res.status(400).send();
    });
  }
}

module.exports = controller;