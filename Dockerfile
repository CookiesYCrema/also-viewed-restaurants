FROM node:carbon

WORKDIR /

COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build-docker

EXPOSE 3000

CMD ["npm", "run", "docker"]