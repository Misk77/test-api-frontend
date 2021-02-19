FROM node:12-alpine
EXPOSE 5000
ENV APP_HOME=/usr/src/trainee-frontend
WORKDIR ${APP_HOME}
RUN npm install express --save && npm install -g nodemon && npm install pug
COPY frontend/ .
COPY package*.json ${APP_HOME}/ 
CMD ["npm", "run", "start"]
