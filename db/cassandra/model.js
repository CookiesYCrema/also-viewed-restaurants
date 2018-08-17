const connection = require('./');

var PlaceC = connection.loadSchema('place', {
  fields:{
      id:{
        type: 'uuid', 
        default: {'$db_function':'uuid()'}
      },
      name: "varchar",
      reviews: "int",
      rating: "int",
      price: "int",
      mainCategory: "varchar",
      subCategory: "varchar",
      city: "varchar",
      image: "varchar"
  },
  key:["id"]
});

PlaceC.syncDB(function(err, result) {
  if (err) throw err;
  if(result) {console.log('Tables created in Cassandra!')}
  else {console.log('No changes in tables')}
});

module.exports = { PlaceC }