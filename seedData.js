const faker = require('faker');
const fs = require('fs');
const write = fs.createWriteStream('./data.csv');

function seedData(writer, encoding, callback) {
  let i = 0;
  let max = 10000000;
  function write() {
    let ok = true;
    while (i < max && ok) {
      let name = faker.lorem.words(3);
      let reviews = faker.random.number(1000);
      let rating = faker.random.number(5);
      let price = faker.random.number(4);
      let mainCategory = faker.lorem.words(1);
      let subCategories = faker.lorem.words(2);
      let city = faker.address.city();
      let image = faker.image.avatar();
      const model = [name, reviews, rating, price, mainCategory, subCategories, city, image];
      i += 1;
      if (i % 100000 === 0) { console.log(i); }
      if (i === max) {
        writer.write(`${model.join(',')}`, encoding, callback);
      } else {
        if(i === 1) {
          console.log('writting header')
          const header = ['name', 'reviews', 'rating', 'price', 'mainCategory', 'subCategories', 'city', 'image'];
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