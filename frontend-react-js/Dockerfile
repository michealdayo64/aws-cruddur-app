FROM node:20-slim

ENV PORT=5173

WORKDIR /frontend-react-js

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD ["npm", "run", "dev", "--", "--host"]