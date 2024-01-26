FROM node:16

WORKDIR /src

# Explicitly copy package files
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Start the application
CMD ["npm", "start"]
