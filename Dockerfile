FROM cypress/browsers:node11.13.0-chrome73

WORKDIR /usr/src/app
COPY . ./

RUN npm i
CMD ["npm", "run", "cypress:run"]