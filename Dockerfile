FROM node:16

WORKDIR /src

COPY ./app/package*.json .


COPY ./app .
RUN npm install 

CMD ["npm", "start"]
