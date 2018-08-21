FROM node:8

COPY . /also-view-restaurants-postgres

WORKDIR /also-view-restaurants-postgres

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "docker"],["npm","run","build"]