\copy places(name, reviews, rating, price, "mainCategory", "subCategories", city, image) FROM 'C:/Users/mario/Documents/HR/HRLA23/SystemDesignCapstone/also-viewed-restaurants/data.csv' CSV HEADER;
COPY mario.place(name, reviews, rating, price, "mainCategory", "subCategory", city, image) FROM 'data.csv' WITH HEADER=TRUE;

FROM node:8

COPY . /also-view-restaurants-postgres

WORKDIR /also-view-restaurants-postgres

RUN npm install
RUN npm build

EXPOSE 3000

CMD ["npm", "run", "docker"]