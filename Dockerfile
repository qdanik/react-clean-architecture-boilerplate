FROM node:12.18-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --silent

# Bundle app source
COPY . /usr/src/app

# Expose port
EXPOSE 3000

# Default command to run
CMD ["npm", "start"]
