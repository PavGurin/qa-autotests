FROM cypress/browsers:node10.2.1-chrome74

WORKDIR /usr/src/app
COPY . ./

RUN printf 'pcm.!default {\ntype plug\nslave.pcm "null"\n}' > /etc/asound.conf

RUN npm i
CMD ["npm", "run", "cypress:run"]
