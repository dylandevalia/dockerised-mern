#  Dockerfile for the server

# Install alpine node
# See [https://derickbailey.com/2017/03/09/selecting-a-node-js-image-for-docker/] for more information
FROM node:17.3.0-alpine3.12

# Create working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy packages
COPY package.json .
COPY yarn.lock .

# Install Dependencies
RUN yarn

# Copy local files
COPY . .

# Expose port
EXPOSE 8080

# Start the server in development mode
CMD ["yarn","start:dev"]
