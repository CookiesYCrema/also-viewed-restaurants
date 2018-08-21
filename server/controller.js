// const db = require('../db/postgres/')
const { Place } = require('../db/postgres/model');

const controller = {
  id: {
    get: (req, res) => {
      console.log(req.params)
      Place.findOne({
        where: { 
          id: req.params.id
        }
      })
      .then(place => {
        res.status(200).send(place);
      })
      .catch(error => {
        console.error('Error getting the place with id =>', error);
        res.status(400).send();
      });
    },

    delete: (req, res) => {
      console.log(req.params)
      Place.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(place => {
        res.status(202).send(place);
      })
      .catch(error => {
        console.error('Error deleting place =>', error);
        res.status(400).send();
      });
    },

    put: (req, res) => {
      Place.update({
        rating: req.body.rating,
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(place => {
        if(place.length !== 0) {
          res.status(202).send({place});
        } else {
          res.status(204).send(place);
        }
      })
      .catch(error => {
        console.error('Error updating place =>', error);
        res.status(400).send();
      });
    }
  },

  mainCategoryCity: {
    get: (req, res) => {
      Place.findAll({
        where: { 
          mainCategory: req.params.mainCategory,
          city: req.params.city
        },
        limit: 10
      })
      .then(places => {
        // console.log('Getting place:', place)
        res.status(200).send(places);
      })
      .catch(error => {
        console.error('Error getting place with mainCategory and city =>', error);
        res.status(400).send();
      });
    },

    post: (req, res) => {
      Place.create({
        name: req.body.name,
        reviews: req.body.reviews,
        rating: req.body.rating,
        price: req.body.price,
        mainCategory: req.body.mainCategory,
        subCategories: req.body.subCategories,
        city: req.body.city,
        image: req.body.image
      })
      .then((place) => {
        // console.log('Creating place:', place)
        res.status(201).send({id: place.id});
      })
      .catch(error => {
        console.error('Error creating place =>', error);
        res.status(400).send();
      });
    }
  },
}

module.exports = controller;