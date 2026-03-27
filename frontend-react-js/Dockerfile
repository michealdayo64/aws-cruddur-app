FROM node:20-slim

ENV PORT=5173

WORKDIR /frontend-react-js

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Ensure Vite is accessible outside container
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]