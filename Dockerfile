FROM node

WORKDIR /usr/src/app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD "nodemon" "server"