<<<<<<< HEAD
FROM node:12

=======
<<<<<<< HEAD
FROM node:12

=======
#Dockerfile
FROM node:12

RUN npm install
RUN apt-get update
RUN apt-get -y install vim 
>>>>>>> e2a9b42c409138dbc32c8ad1532584f09361900e
>>>>>>> 3803200c1387304acbc34795b6310c593605e7c4

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3803200c1387304acbc34795b6310c593605e7c4

RUN npm install
RUN apt-get update
RUN apt-get -y install vim 

<<<<<<< HEAD
=======
=======
>>>>>>> e2a9b42c409138dbc32c8ad1532584f09361900e
>>>>>>> 3803200c1387304acbc34795b6310c593605e7c4
COPY . .

EXPOSE 3306

CMD [ "node", "main.js" ]
