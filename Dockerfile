FROM cypress/browsers:node11.13.0-chrome73

WORKDIR /usr/src/app
COPY . ./

RUN printf 'pcm.!default {\ntype plug\nslave.pcm "null"\n}' > /etc/asound.conf

RUN npm i
CMD ["npm", "run", "cypress:run"]