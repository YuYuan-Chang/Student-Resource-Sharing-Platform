<<<<<<< HEAD
FROM node:18.17.0-alpine
=======
FROM node:alpine
>>>>>>> 9ab12212f2fd6a289e10f0d5a20a414ea9e9d31b

WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
COPY . .

CMD ["npm", "start"]