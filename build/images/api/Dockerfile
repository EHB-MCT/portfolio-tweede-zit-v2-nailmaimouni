# Use the official Node.js image from the Docker Hub
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/app

# Copy package.json and package-lock.json
COPY package*.json ./   

# Install dependencies
RUN npm install --quiet

# Copy the src directory contents into the container at /app/src
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run index.js when the container launches
CMD ["npm", "start"]
