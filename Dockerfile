FROM node:alpine

ADD app.js .
ADD package.json .

RUN npm install

CMD ["npm", "start"]