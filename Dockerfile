FROM node:12


WORKDIR /app

COPY ["db.js", "./"]
COPY ["delete.html", "./"]
COPY ["delete.js", "./"]
COPY ["input.html", "./"]
COPY ["input.js", "./"]
COPY ["insert.html", "./"]
COPY ["insert.js", "./"]
COPY ["main.js", "./"]
COPY ["main.html", "./"]
COPY ["query.js", "./"]
COPY ["query.html", "./"]
COPY ["package.json", "./"]


RUN npm install
RUN apt-get update
RUN apt-get -y install vim 

COPY . .

EXPOSE 3306

CMD [ "node", "main.js" ]
