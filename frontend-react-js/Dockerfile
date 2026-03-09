FROM node:20-slim

ENV PORT=5173
WORKDIR /frontend-react-js

COPY . /frontend-react-js

RUN npm install
EXPOSE ${PORT}
CMD ["npm", "run", "dev"]