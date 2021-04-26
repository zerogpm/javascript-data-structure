FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install -g --save-dev jest

RUN npm install

COPY ./ ./

CMD ["npm", "run", "test"]