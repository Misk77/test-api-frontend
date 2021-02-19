FROM node:12-alpine
EXPOSE 5000
ENV APP_HOME=/usr/src/trainee-frontend
WORKDIR ${APP_HOME}
COPY package*.json ${APP_HOME}/
RUN npm install
COPY frontend/ .
CMD ["npm", "run", "start"]
