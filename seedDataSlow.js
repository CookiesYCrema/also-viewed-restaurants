const faker = require('faker');
const fs = require('fs');

fs.writeFile('data.csv', 'name, reviews, rating, price, mainCategory, subCategories, city, image', (err) => {  
  if (err) throw err;
  console.log('Header created!');
  let recurseSeeding = (count = 0) => {
    if(count % 1000000 === 0) console.log('creating:', count + 1)
    if(count  === 10000000) return; 
      let name = faker.lorem.words(3);
      let reviews = faker.random.number(1000);
      let rating = faker.random.number(5);
      let price = faker.random.number(4);
      let mainCategory = faker.lorem.words(1);
      let subCategories = faker.lorem.words(2);
      let city = faker.address.city();
      let image = faker.image.avatar();
      let entry = '\n' + name + ',' + reviews + ',' + rating + ',' + price + ',' + mainCategory + ',' + subCategories  + ',' + city + ',' + image;
      fs.appendFile('data.csv', entry, (err) => {
        if (err) throw err;
        recurseSeeding(count + 1);
      });
  }
  recurseSeeding();
});