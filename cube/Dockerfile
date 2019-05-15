FROM node:10-alpine
LABEL AUTHOR="dalong"
LABEL EMAIL="1141591465@qq.com"
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000