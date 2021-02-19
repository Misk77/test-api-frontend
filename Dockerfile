FROM node:12
WORKDIR /frontend
COPY . .
RUN npm install && npm install nodemon && npm install express-http-proxy --save
EXPOSE 5000
CMD npm run start
