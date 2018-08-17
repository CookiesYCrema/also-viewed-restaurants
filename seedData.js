const faker = require('faker');
const fs = require('fs');
const write = fs.createWriteStream('./data.csv');

function generateUUID() {
  var d = new Date().getTime();
  if(Date.now){
      d = Date.now(); //high-precision timer
  }
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};

function seedData(writer, encoding, callback) {
  let i = 0;
  let max = 10000000;
  function write() {
    let ok = true;
    while (i < max && ok) {
      let id = generateUUID();
      let name = faker.lorem.words(3);
      let reviews = faker.random.number(1000);
      let rating = faker.random.number(5);
      let price = faker.random.number(4);
      let mainCategory = faker.lorem.words(1);
      let subCategories = faker.lorem.words(2);
      let city = faker.address.city();
      let image = faker.image.avatar();
      const model = [id, name, reviews, rating, price, mainCategory, subCategories, city, image];
      i += 1;
      if (i % 100000 === 0) { console.log(i); }
      if (i === max) {
        writer.write(`${model.join(',')}`, encoding, callback);
      } else {
        if(i === 1) {
          console.log('writting header')
          const header = ['id', 'name', 'reviews', 'rating', 'price', 'mainCategory', 'subCategories', 'city', 'image'];
          ok = writer.write(`${header.join(',')}\n`, encoding);
        }
        ok = writer.write(`${model.join(',')}\n`, encoding);
      }
    }
    if (i < max) {
      writer.once('drain', write);
    }
  }
  write();
}
seedData(write, 'utf8', () => { console.log('done'); });